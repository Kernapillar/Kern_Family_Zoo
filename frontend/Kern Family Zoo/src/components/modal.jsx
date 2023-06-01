import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/modal.css';

const Modal = ({isOpen, onClose, pictures}) => {
    
    const numPics = pictures.length;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const pictureId = useParams().pictureId;

    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const [currentPicture, setCurrentPicture] = useState(pictures[currentPictureIndex])
    const navigate = useNavigate();

    const findIndex = () => {
        for (let i = 0; i < numPics; i++) {
            let pic = pictures[i];
            if (pic.id === parseInt(pictureId)) return i;
        }
        console.log("FIND INDEX BROKEN");
        return -1; // Return -1 if picture ID is not found
    };



    useEffect(() => {
        setModalIsOpen(isOpen);
        const index = findIndex();
        if (index !== -1) {
            setCurrentPictureIndex(index);
            setCurrentPicture(pictures[index]);
        }
    }, [isOpen]);

    const handleClose = () => {
        setModalIsOpen(false);
        onClose();
        navigate(`/gallery`);
    };
    
    

    const handleNext = () => {
        const nextIndex = (currentPictureIndex + 1) % pictures.length;
        setCurrentPictureIndex(nextIndex);
        setCurrentPicture(pictures[nextIndex]);
        navigate(`/gallery/${pictures[nextIndex].id}`);
      };
      
      const handlePrev = () => {
        const prevIndex = (currentPictureIndex - 1 + pictures.length) % pictures.length;
        setCurrentPictureIndex(prevIndex);
        setCurrentPicture(pictures[prevIndex])
        navigate(`/gallery/${pictures[prevIndex].id}`);
    };
   

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