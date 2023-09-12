"use client"
import { Modal } from 'antd'
import { FormKonsultaciya } from '../form/FormKonsultaciya'
import { FormTel } from '../form/FormTel'

export const ModalUniversal = ({ isModalOpen, title = '', handleCancel, isActive }) => {

	return (
		<Modal
			title={title}
			open={isModalOpen}
			onCancel={handleCancel}
			centered
			footer={null}
		>
			{
				isActive.konsultaciya && <FormKonsultaciya handleCancel={handleCancel} />
			}
			{
				isActive.tel && <FormTel handleCancel={handleCancel} />
			}

		
		</Modal>
	)
}
