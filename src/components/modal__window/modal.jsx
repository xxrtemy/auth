import './modal.css'
import React from 'react';

const Modal = (props) => {

    return(
        <div className={props.active ? 'modal active' : 'modal'} onClick={() => props.setActive(false)}>
            <div className={props.active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
            <button className='modal__btn' onClick={() => props.setActive(false)}>×</button>
        </div>
    )
}

export default Modal;