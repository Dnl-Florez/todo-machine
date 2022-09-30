import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }){
  const modal = ReactDOM.createPortal(
    <div className='ModalBackground'>
      { children }
    </div>,
    document.getElementById('modal')
  );

  return modal; 
}

export { Modal };
