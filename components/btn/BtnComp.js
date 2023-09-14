"use client"
import { useState } from "react";

import { ModalUniversal } from "../modal/ModalUniversal"

function BtnComp() {
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

			<ModalUniversal
				isModalOpen={isModalOpen}
				title={title}
				handleCancel={handleCancel}
				isActive={isActive}
			/>
		</div>
	)
}

export default BtnComp