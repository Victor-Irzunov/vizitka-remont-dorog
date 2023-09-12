"use client"
import { useState } from 'react';
import { Form, Button, Input, message, Select, DatePicker, TimePicker } from 'antd';
import InputMask from 'react-input-mask';
import { sendOrderTelegram } from '@/http/telegramAPI';

const { TextArea } = Input;


export const FormKonsultaciya = ({ handleCancel, link, title = 'Заказ с сайта Бани', order2 }) => {
	const [tel, setTel] = useState('')
	const [isActive, setIsActive] = useState(false)

	const onFinish = (values) => {
		let messageForm = `<b>${title}</b>\n`
		messageForm += `<b> </b>\n`
		messageForm += `<b>Клиент по имени ${values.name || '-'}  </b>\n`
		messageForm += `<b>Интересует: ${values.technika} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Примечание: ${values.primechanie || '-'} </b>\n`
		messageForm += `<b>- - - - - - - - - - - - - - -</b>\n`
		messageForm += `<b>Телефон:</b> ${values.tel}\n`

		sendOrderTelegram(messageForm)
			.then(data => {
				if (data.ok) {
					message.success('Ваш запрос принят!')
					setIsActive(true)
					if (handleCancel) {
						handleCancel()
					}
				}
			})

	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	}

	const beforeMaskedValueChange = (newState, oldState, userInput) => {
		var { value } = newState
		var selection = newState.selection
		var cursorPosition = selection ? selection.start : null
		if (value.endsWith('-') && userInput !== '-' && !tel.endsWith('-')) {
			if (cursorPosition === value.length) {
				cursorPosition--
				selection = { start: cursorPosition, end: cursorPosition }
			}
			value = value.slice(0, -1)
		}
		return {
			value,
			selection
		}
	}
	return (

		<>
			<Form
				name="order"
				labelCol={{
					span: 24,
				}}
				wrapperCol={{
					span: 24,
				}}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete="off"
			>
				<Form.Item
					label="Ваше имя"
					name="name"
					tooltip=""
				>
					<Input style={{
						width: 200,
					}} />
				</Form.Item>

				<Form.Item
					label="Ваш телефон"
					name="tel"
					tooltip="код оператора и номер"
					rules={[
						{
							required: true,
							message: 'Пожалуйста введите номер!',
						},
					]}
				>
					<InputMask
						placeholder="29 123-45-67"
						mask="+3\7\5 99 999 99 99"
						maskChar={'-'}
						className='border py-1 px-3 rounded-md w-full'
						beforeMaskedValueChange={beforeMaskedValueChange}
						value={tel}
						onChange={(e) => setTel(e.target.value)}
						style={{
							width: 200,
						}}
					/>
				</Form.Item>

				<Form.Item
					label="Ваш вопрос"
					name="primechanie"
					tooltip=""
				>
					<TextArea
						autoSize={{
							minRows: 4,
						}}
						placeholder=""
					/>
				</Form.Item>



				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type="primary" htmlType="submit">
						Получить консультацию
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}
