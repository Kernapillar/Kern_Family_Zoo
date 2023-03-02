import React, {useState, useEffect } from "react";
import '../styles/modal.css';

const Modal = ({isOpen, onClose, imgUrl}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setModalIsOpen(false);
        onClose();
    };

    return (
        <div className={`modal`}>
             <div className="modal-content">
                <span className="modal-close" onClick={handleClose}>
                    &times;
                </span>
                <img src={imgUrl} alt="modal" />
             </div>
        </div>
    )

};


export default Modal; 