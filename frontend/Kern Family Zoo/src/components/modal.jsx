import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/modal.css';

const Modal = ({isOpen, onClose, pictures}) => {

    const numPics = pictures.length;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const pictureId = useParams().pictureId;
    const [currentPicture, setCurrentPicture] = useState(pictures[pictureId - 1])
    const navigate = useNavigate();
    console.log("PARAMS", pictureId)

    

    useEffect(() => {
        setModalIsOpen(isOpen);
    }, [isOpen]);

    const handleClose = () => {
        setModalIsOpen(false);
        onClose();
        navigate(`/gallery`);
    };
    
    // const findIndex = () => {
    //     for (let i = 0; i < numPics; i++) {
    //         let pic = picture[i]; 
    //         if (pic.id === pictureId)
    //     }
    // };

    const handleNext = () => {
        if (currentPicture.id === pictures.length) {
            setCurrentPicture(pictures[0]);
            navigate(`/gallery/1`);
            return;
        }
        setCurrentPicture(pictures[currentPicture.id]);
        navigate(`/gallery/${currentPicture.id+1}`)
        console.log('current', currentPicture)
    }
    const handlePrev = () => {
        if (currentPicture.id === 1) {
            setCurrentPicture(pictures[pictures.length - 1]);
            navigate(`/gallery/${pictures.length}`);
            return;
        }
        setCurrentPicture(pictures[currentPicture.id - 2]);
        navigate(`/gallery/${currentPicture.id - 1}`)
        console.log( 'current', currentPicture)

    }
   

    return (
        <div className={`modal`}>
             <div className="modal-visual">
                <img src={currentPicture.src} alt="modal" />
             </div>
             <div className="modal-controls">
                <button onClick={handlePrev}>{`<<`}</button>
                <button onClick={handleNext}>{`>>`}</button>
                <span className="modal-close" onClick={handleClose}>
                    &times;
                </span>
             </div>
        </div>
    )

};


export default Modal; 