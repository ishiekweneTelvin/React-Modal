import React from 'react'
import nft from './pexels-pixabay-414860.jpg';

const Modal = ({open,onClose}) => {
  if (!open) return null
  return (
    <div className='overlay'>
  <div className='.modalContainer'>
    <img src={nft} alt=''/>

    <div className='modalRight'>
      <p onClick={onClose} className='closeBtn'>X</p>
      <div className='content'>
        <p>Do yoy want a </p>
        <h1>$40 CREDIT</h1>
        <p>for yoe first trade?</p>
      </div>
      <div className='btnContainer'>
        <button className='btnPrimary'>
          <span className='bold'>YES</span>, I love NFT's
        </button>
        <button className='btnOutline'>
          <span className='bold'>NO</span>,thanks
        </button>
      </div>
    </div>
  </div>

    </div>
  );
}

export default Modal