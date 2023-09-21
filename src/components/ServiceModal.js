import React, { useState } from 'react'
import ModalContent from './ModalContent'

const ServiceModal = (props) => {
    const{value,data}=props
const[showModal,setShowModal]=useState(false)

const displayModal=()=>{
    setShowModal(true)
    document.body.style.overflowY="hidden"
}
const hideModal=()=>{
    setShowModal(false)
}


  return (
    <>
      <button onClick={displayModal} className='btn2 '>Read more </button>

      {showModal && <ModalContent hideModal={hideModal} value={value} data={data}/>}
    </>
  )
}

export default ServiceModal
