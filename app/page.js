'use client'
import { ModalUniversal } from '@/components/modal/ModalUniversal';
import Image from 'next/image';
import { useState } from "react";
// import SliderComp from '../components/slider/SliderComp';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [isActive, setIsActive] = useState({
    konsultaciya: false,
    tel: false
  });
  const handleCancel = () => {
    setIsModalOpen(false)
  };

  const showModal = (title, active) => {
    setIsModalOpen(true)
    setTitle(title)
    if (active === "konsultaciya") {
      setIsActive(prev => ({ ...prev, konsultaciya: true, tel: false }))
    }
    if (active === "tel") {
      setIsActive(prev => ({ ...prev, konsultaciya: false, tel: true, }))
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between" id='main'>
      <div className='w-full min-h-screen bg-cover fon bg-center' />

      <section className='container mx-auto relative min-h-[85vh] xz:pt-16 xs:pt-24'>
        <div className='flex justify-between sd:w-2/3 xz:w-full relative'>
          <div className='pt-20 text-white'>
            <h1 className='font-bold xx:text-4xl xz:text-2xl sd:text-5xl uppercase'>
              Строительство и ремонт дорог в Беларуси
            </h1>

            <p className='uppercase xx:text-base xz:text-sm sd:text-lg mt-6 text-yellow-300'>
              Благоустройство прилегающих территорий
            </p>

            <ul className='mt-16 bg-black/25 text-white/90 px-2 py-3 uppercase xz:text-xs sd:text-base'>
              <li className='mb-2 '>
                Земляные работы
              </li>
              <li className='mb-2'>
                Устройство оснований и покрытий из песчано-гравийных смесей
              </li>
              <li className='mb-2'>
                Устройство дорожных одежд с покрытием из плит тротуарных и пешеходных путей и зон
              </li>
              <li className='mb-2'>
                Благоустройство территорий
              </li>
              <li className='mb-2'>
                Устройство асфальтобетонных, цементобетонных покрытий и оснований
              </li>
            </ul>

            <div className="mt-12 flex xz:flex-col-reverse xs:flex-row xz:items-start">
              <button
                className='text-white px-5 xz:mt-6 xs:mt-0 py-1 font-light rounded-2xl text-sm bg-[#65BB1E]'
                onClick={() => showModal("Получить консультацию", "konsultaciya")}
              >
                Получить консультацию
              </button>
              {/* <button
                className='xz:ml-0 xs:ml-5 px-5 py-1 font-light rounded-2xl text-sm bg-[#65BB1E]'
                onClick={() => showModal("Заказать звонок", "tel")}
              >
                Заказать звонок
              </button> */}
            </div>
          </div>
          <div className='absolute bottom-0 right-3'>
            <Image src='/main/100.webp' alt='ремонт дорог' width={100} height={63} />
          </div>
        </div>
      </section>


      <section className='relative xz:py-10 xs:pt-24 bg-white w-full mt-24' id='about'>
        <article className='container mx-auto'>
          <Image src='/logo/logo.webp' alt='логотип компании по ремонту дорог' width={130} height={130} className='float-left pr-4 pb-1' />
          <h5 className='uppercase font-bold mb-2 text-lg'>
            О компании
          </h5>

          <div className='text-justify'>

            <p className='mb-2'>
              Когда дело касается строительства, ремонта дорог и преобразования окружающей среды, наша компания - это надежный партнер с безупречной репутацией. Основанная в 2010 году, ООО "БирДорСтрой" под руководством директора Бирана Сергея Владимировича, стремится к идеалу в области инфраструктурных решений.
            </p>
            <h6 className='font-semibold mt-6 mb-2'>
              Наши Преимущества:
            </h6>
            <p className='mb-2'>
              Наша команда состоит из высококвалифицированных специалистов, имеющих богатый опыт в строительстве и ремонте дорог. Мы всегда знаем, как решить даже самые сложные задачи.
            </p>
            <p className='mb-2'>
              Мы постоянно следим за современными технологическими трендами и внедряем их в нашу работу. Это позволяет нам обеспечивать высший стандарт качества и эффективности в каждом проекте.
            </p>
            <p className='mb-2'>
              Мы гордимся тем, что наши проекты не только улучшают инфраструктуру, но и содействуют улучшению окружающей среды и комфорта для наших заказчиков и их сообществ.
            </p>

            <p className='mb-2'>
              Мы понимаем, что каждый проект уникален, и подходим к нему с учетом его особенностей. Наша задача - превратить ваши идеи в реальность, предоставив решения, которые соответствуют вашим потребностям и бюджету.
            </p>

            <p className='mb-5'>
              Мы ценим ваше время и ваши финансы. Поэтому мы всегда стремимся выполнить проекты в срок и в рамках бюджета.
            </p>

            <p className='font-semibold mb-5'>
              Мы гордимся тем, что наши работы оставляют следы качества и улучшают жизнь людей. Если вам нужны надежные и профессиональные услуги по строительству, ремонту дорог и благоустройству территорий, обращайтесь в ООО "БирДорСтрой". Мы создаем дороги, которые ведут в будущее.
            </p>
            <p className='font-bold'>
              ООО "БирДорСтрой" - ваш надежный партнер в мире инфраструктурных решений.
            </p>
          </div>
        </article>
      </section>


      <section className='relative py-24 w-full'>
        <div className='container mx-auto'>
          <div className='text-center'>
            <h4 className='text-2xl uppercase text-white'>
              Наш сертификат и атестат
            </h4>
          </div>
          <div className='xz:flex-row sd:flex'>
            <Image
              src='/main/1.webp'
              alt='сертификат компании'
              className="object-cover w-full h-full mx-auto mt-12"
              style={{ width: 'auto', height: 'auto' }}
              width={370} height={524} />
            <Image
              src='/main/2.webp'
              alt='сертификат компании'
              className="object-cover w-full h-full mx-auto mt-12"
              style={{ width: 'auto', height: 'auto' }}
              width={370} height={524} />
          </div>
        </div>
      </section>


      <section className="container mx-auto relative py-24">
        <p className="text-white text-justify mb-6">
          В сотрудничестве с ООО "БирДорСтрой" вы сможете успешно решить вопрос с дорожным покрытием, создавая превосходные дороги и обеспечивая комфорт на прилегающей территории. Не упустите возможность воспользоваться нашим богатым опытом, высоким профессионализмом и инновационными решениями, которые мы предоставляем.
        </p>
        <p className="text-center xz:text-lg sd:text-xl font-semibold text-white">
          Свяжитесь с нами по номеру <a href="tel:80293564004" className="font-bold">☎ +375 29 356-40-04</a> или напишите на адрес электронной почты 📧 birdors@yandex.by, чтобы начать работу над вашими проектами уже сегодня. Давайте создадим идеальные дороги вместе!
        </p>
      </section>


      <ModalUniversal
        isModalOpen={isModalOpen}
        title={title}
        handleCancel={handleCancel}
        isActive={isActive}
      />
    </main>
  )
}
