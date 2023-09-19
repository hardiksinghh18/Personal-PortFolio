import React, { useState } from 'react'
import ModalContent from './ModalContent'

const ServiceModal = (props) => {
    const{value}=props
const[showModal,setShowModal]=useState(false)

const displayModal=()=>{
    setShowModal(true)
}
const hideModal=()=>{
    setShowModal(false)
}


  return (
    <>
      <button onClick={displayModal} className='btn'>Read more</button>

      {showModal && <ModalContent hideModal={hideModal} value={value}/>}
    </>
  )
}

export default ServiceModal
