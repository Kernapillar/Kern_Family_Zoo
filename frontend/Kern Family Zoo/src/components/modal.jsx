import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/modal.css';

const Modal = ({isOpen, onClose, imgUrl}) => {
    console.log("MODAL INFO", isOpen, onClose, imgUrl);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setModalIsOpen(false);
        onClose();
        navigate(`/`);
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