// "use client"
// import { useState } from 'react'
import { Divider } from 'antd'
// import { ToolOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'

export const MenuMobil = ({ onClose }) => {
	// const [isOpen, setIsOpen] = useState(false)

	// const showDrawerMenuMobil = () => {
	// 	setIsOpen(true)
	// }


	return (
		<div className='h-full'>
			<nav className='h-full'>
				<ul className='h-full flex flex-col justify-start items-start text-sm cursor-pointer'>
					<li>
						<LinkScroll to='main'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							Главная
						</LinkScroll>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-start items-center w-full'>
						<LinkScroll to='about'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							О компании
						</LinkScroll>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />

					<li className='flex justify-start items-center w-full'>
						<LinkScroll to='contact'
							className="cursor-pointer"
							onClick={onClose}
							style={{ color: '#000' }}
							smooth={true}
							offset={-100}
							duration={800}
						>
							Контакты
						</LinkScroll>
					</li>
					<Divider style={{ marginTop: '8px', marginBottom: '8px' }} />



				</ul>
			</nav>
		</div>
	)
}
