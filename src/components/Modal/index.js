import React from 'react'
import Modal from 'react-modal';

const PopUpModal = ({img_src, img_alt, modalIsOpen, closeModal}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex:'99'
        },
      };
  return (
    <Modal
    isOpen={modalIsOpen}
    //   onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel=""
  >
      <span className='hover:text-primary-blue font-semibold cursor-pointer flex justify-end pb-1' onClick={closeModal}><CloseIcon/></span>
    <img src={img_src} alt={img_alt} className=" sm:h-[700px] h-auto object-cover "/>

  </Modal>
  )
}

const CloseIcon = () =>{
    return (
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M3,3 L21,21 M3,21 L21,3"></path></svg>
    )
  }

export default PopUpModal