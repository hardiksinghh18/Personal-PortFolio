import React, { useState } from 'react'
import ModalContent from './ModalContent'

const ServiceModal = (props) => {
  const { value, data } = props
  const [showModal, setShowModal] = useState(false)

  const displayModal = () => {
    setShowModal(true)
    document.body.style.overflowY = "hidden"
  }
  const hideModal = () => {
    setShowModal(false)
  }


  return (
    <>
      {/* <div className='viewMore'> */}
      
         <span onClick={displayModal} className='githublink btn2'><i class='bx bx-info-square' ></i></span>
         {/* </div> */}

      {showModal && <ModalContent hideModal={hideModal} value={value} data={data} />}
    </>
  )
}

export default ServiceModal
