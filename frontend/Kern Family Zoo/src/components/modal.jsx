import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/modal.css';

const Modal = ({isOpen, onClose, imgUrl, pictures, currentIdx}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const pictureId = useParams();
    const [currentPicture, setCurrentPicture] = useState(pictures[parseInt(pictureId.pictureId) - 1])
    const navigate = useNavigate();
    console.log("MODAL INFO",currentPicture);

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setModalIsOpen(false);
        onClose();
        navigate(`/`);
    };

    const handleNext = () => {
        
        setCurrentPicture(pictures[currentPicture.id]);
        navigate(`/${currentPicture.id+1}`)
    }
   

    return (
        <div className={`modal`}>
             <div className="modal-content">
                <span className="modal-close" onClick={handleClose}>
                    &times;
                </span>
                <img src={currentPicture.src} alt="modal" />
                <button onClick={handleNext}>click</button>
             </div>
        </div>
    )

};


export default Modal; 