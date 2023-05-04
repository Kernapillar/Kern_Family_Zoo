import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/modal.css';

const Modal = ({isOpen, onClose, imgUrl, pictures, currentIdx}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const pictureId = useParams();
    const [currentPicture, setCurrentPicture] = useState(pictures[parseInt(pictureId.pictureId) - 1])
    const navigate = useNavigate();

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setModalIsOpen(false);
        onClose();
        navigate(`/`);
    };

    const handleNext = () => {
        if (currentPicture.id === pictures.length) {
            setCurrentPicture(pictures[0]);
            navigate(`/1`);
            return;
        }
        setCurrentPicture(pictures[currentPicture.id]);
        navigate(`/${currentPicture.id+1}`)
    }
    const handlePrev = () => {
        if (currentPicture.id === 1) {
            setCurrentPicture(pictures[pictures.length - 1]);
            navigate(`/${pictures.length}`);
            return;
        }
        setCurrentPicture(pictures[currentPicture.id - 2]);
        navigate(`/${currentPicture.id - 1}`)
    }
   

    return (
        <div className={`modal`}>
             <div className="modal-visual">
                <img src={currentPicture.src} alt="modal" />
             </div>
             <div className="modal-controls">
                <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
                <span className="modal-close" onClick={handleClose}>
                    &times;
                </span>
             </div>
        </div>
    )

};


export default Modal; 