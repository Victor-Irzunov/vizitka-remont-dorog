'use client'
import telegram from '../../public/social-icon/telegram.svg'
import viber from '../../public/social-icon/viber.svg'
import instagram from '../../public/social-icon/instagram.svg'
import { PhoneOutlined, MailOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'

const Footer = () => {
	const screens = useScreens()
	return (
		<footer className="mt-auto relative pt-6 pb-3 bg-yellow-400" id='contact'>
			<div className="container mx-auto">
				<div className='flex justify-between items-start text-black flex-wrap'>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid text-lg'>
							Информация
						</p>
						<ul className='no-underline list-none pl-0'>
							<li className='no-underline list-none'>
								<LinkScroll to='about'
									className="cursor-pointer"
									smooth={true}
									offset={-100}
									duration={800}
								>
									О компании
								</LinkScroll>
							</li>
						</ul>
					</div>

					<div className='font-light text-base xs:mb-4'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid text-lg'>
							Контакты
						</p>
						<p>
							<PhoneOutlined className='mr-3 rotate-90 text-lg' />
							<a href='tel:80293564004' className=''>
								+375 29 356-40-04
							</a>
						</p>
						<p>
							<MailOutlined className='mr-3 text-lg' />
							birdors@yandex.by
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							Юр. адрес
						</p>
						<p>
							231400, г.Новогрудок, ул. Минская, 99A
						</p>
					</div>
					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							График работы
						</p>
						<p>
							Пн-Пт - 08:00 - 18:00
						</p>
						<p>
							Сб-Вс - выходной
						</p>
					</div>

					<div className='font-light text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
						<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
							Мы в соц. сетях
						</p>
						<div className='flex justify-evenly items-center pt-3'>
							<a href='https://www.instagram.com/' target='_blank' >
								<Image src={instagram} width={25} alt='иконка инстаграма' />
							</a>
							<a href={`${screens.md ? 'https://t.me/' : 'https://t.me/@'}`} target='_blank' >
								<Image src={telegram} width={25} alt='иконка телеграма' />
							</a>
							<a href='viber://chat?number=%2B375' target='_blank' >
								<Image src={viber} width={25} alt='иконка вайбера' />
							</a>
						</div>
					</div>
				</div>

				<div className='font-light w-full text-base xs:mb-4 xx:mb-4 xy:mb-4 xz:mb-4 xm:mb-0'>
					<p className='border-b border-t-transparent border-l-transparent border-r-transparent border-black/60 border-solid font-light text-lg'>
						Реквизиты
					</p>
					<div className='pt-3 text-sm'>
						<p className='mb-1'>
							Общество с ограниченой ответственностью "БирДорСтрой"
						</p>
						<p className='mb-1'>
							231400 Гродненская обл., г. Новогрудок, ул. Минская 99А
						</p>
						<p className='mb-1'>
							р/с BY64 BPSB 3012 3305 6401 4933 0000
						</p>
						<p className='mb-1'>
							в ОАО "Сбер Банк" г. Минск пр. Независимости, 32А
						</p>
						<p className='mb-1'>
							УНП 591625021
						</p>
					</div>
				</div>


				<div
					className='mt-6 border-t border-black pt-2'
				>
					<p className='text-black/50 xs:text-xs xz:text-[10px]' >Copyright © 2013-2023 | Разработка и Продвижение
						<a href='https://vi-tech.by' target='_blank' rel="noreferrer" className='text-blue-700 no-underline'> VI:TECH</a>
					</p>
				</div>
			</div>
		</footer >
	)
}


export default Footer
