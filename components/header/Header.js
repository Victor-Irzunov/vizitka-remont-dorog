"use client"
import Image from 'next/image'
import logo from '../../public/logo/logo.webp'
import Link from 'next/link'
// import { motion, AnimatePresence } from "framer-motion"
import { useState } from 'react'
// import { dataService } from '@/constants/data/DataService'
import { MenuOutlined } from '@ant-design/icons'
import { useScreens } from '@/constants/constants'
import { DrawerComp } from '../drawer/DrawerComp'
// import { transliterate } from '@/transliterate/transliterate'
import { Link as LinkScroll } from 'react-scroll'

const Header = () => {
  const [hover, setHover] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [placement, setPlacement] = useState('')
  const [title, setTitle] = useState('')
  const screens = useScreens()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isForm, setIsForm] = useState(false)
  const showModal = (isForm) => {
    setIsForm(isForm)
    setIsModalOpen(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  const handleMouseEnter = () => {
    setHover(true)
  }
  const showDrawer = (position, title) => {
    setOpenMenu(true)
    setPlacement(position)
    setTitle(title)
  }
  const navBar = [
    {
      id: 1,
      name: 'Главная',
      link: 'main'
    },
    {
      id: 4,
      name: 'О компании',
      link: 'about'
    },
    {
      id: 5,
      name: 'Контакты',
      link: 'contact'
    },
  ]

  // function gtag_report_conversion(url) {
  //   var callback = function () {
  //   };
  //   window.gtag('event', 'conversion', {
  //     'send_to': 'AW-11273957189/54HvCP2I48oYEMXe6_8p',
  //     'event_callback': callback
  //   });
  //   return false;
  // }


  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 py-1 bg-white shadow-xl"
      onMouseLeave={handleMouseLeave}
    >
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <div className=''>
            <LinkScroll
              to='about'
              className="cursor-pointer"
              smooth={true}
              offset={-100}
              duration={800}
            >
              <Image
                src={logo}
                width={screens.lg ? 90 : 70}
                height='auto'
                alt='логотип компании'
              />
            </LinkScroll>
          </div>
          <nav className='xz:hidden sd:block'>
            <ul className='flex justify-between items-center'>
              {
                navBar.map(el => {
                  return (
                    <li key={el.id}
                      className='mx-2 uppercase'
                      onMouseEnter={el.id === 2 ? handleMouseEnter : handleMouseLeave}
                    >
                      <LinkScroll
                        to={el.link}
                        className="cursor-pointer"
                        smooth={true}
                        offset={-100}
                        duration={800}
                      >
                        {el.name}
                      </LinkScroll>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
          <div className='xy:pl-4'>

            <a
              href='tel:80293564004'
              className='block xx:text-xl xz:text-lg'
            // onClick={() => gtag_report_conversion('/')}
            >
              +375 29 356-40-04
            </a>
          </div>

          <div className=''>

          </div>

          <div className='xz:inline-block sd:hidden'>
            <MenuOutlined
              className='text-4xl'
              onClick={() => showDrawer('right', 'Меню')}
            />
          </div>
        </div>
      </div>

      {/* <AnimatePresence>
        {
          hover &&
          (<motion.div
            initial={{ heigth: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='w-full mt-2'
            style={{ borderTop: '1px solid #ccc', zIndex: '100000' }}
          >
            <div className='container mx-auto px-10'>
              <div className='pt-6 pb-4 text-sm border-t-black  font-light flex justify-between items-start flex-wrap'>
                <ul>
                  {
                    dataService.map(el => {
                      return (
                        <li className='mb-3 text-lg' key={el.id}>

                          <Link href={`${el.link}`}
                            className="cursor-pointer hover:text-blue-700"
                            onClick={handleMouseLeave}
                          >
                            {el.title}
                          </Link>
                        </li>
                      )

                    })
                  }
                </ul>
              </div>
            </div>
          </motion.div>)
        }
      </AnimatePresence> */}
      <DrawerComp
        openMenu={openMenu}
        placement={placement}
        title={title}
        setOpenMenu={setOpenMenu}
        isActiveForm={{ menu: true }}
      />
    </header>
  )
}

export default Header
