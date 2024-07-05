import React from 'react'
import { Modal } from 'react-bootstrap'
import { CloseIcon } from '../../../../Assets/Images/Icons/SvgIcons'
import './CommonModal.scss'

const CommonModal = (props) => {
    return (
        <Modal className={`common_modal ${props.className || ""}`} centered show={props.show} onHide={props.handleClose}>
            {
                props.heading &&
                <Modal.Header>
                    <Modal.Title>{props.heading}</Modal.Title>
                    <button onClick={props.handleClose} className='modal_close_btn'><CloseIcon /></button>
                </Modal.Header>
            }
            <Modal.Body>
                {
                    props.children
                }
            </Modal.Body>
        </Modal>
    )
}

export default CommonModal
