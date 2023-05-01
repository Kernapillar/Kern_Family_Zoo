import { useState, useEffect,} from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import '../styles/gallery.css'
import { GalleryColumn } from './galleryColumn'
import Modal from './modal';


const Gallery = (props) =>{
  const [columns, setColumns] = useState(5);
  const [width, setWidth] = useState(window.innerWidth);
  const [images, setImages] = useState(props.pics);
  const [modalIsOpen, setModalIsOpen] = useState(props.modalState);
  const [modalPicture, setModalPicture] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    if (width < 700) {
      setColumns(1);
    } else if (width < 1200) {
      setColumns(2);
    } else if (width < 1500) {
      setColumns(3);
    } else if (width < 1700) {
      setColumns(4);
    } else {
      setColumns(5)
    }
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  });
  
  const updateFilter = (num) => {
      if (num === -1) {
        setImages(props.pics);
      } else {
        setImages(props.pics.filter(img => img.legs === num))
      }
  };

  const renderNav = () => {
    return (
      <nav className='navbar'>
        <button className='filter-button' onClick={() => updateFilter(-1)}>clear filter</button>
        <button className='filter-button' onClick={() => updateFilter(0)}>0 legs</button>
        <button className='filter-button' onClick={() => updateFilter(2)}>2 legs</button>
        <button className='filter-button' onClick={() => updateFilter(4)}>4 legs</button>
        <button className='filter-button' onClick={() => updateFilter(8)}>8 legs</button>
      </nav>
    )
  };

  const renderCols = () => {
    const colCount = Math.min(columns, 5); // Limit the column count to 5
    const colArr = images.reduce((acc, img, i) => {
      const colIndex = i % colCount;
      acc[colIndex] = acc[colIndex] || [];
      acc[colIndex].push(img);
      return acc;
    }, []);
  
    return (
      <div className='gallery'>
        {colArr.map((col, i) => (
          <GalleryColumn key={i} pics={col} openModal={handleOpenModal}/>
        ))}
      </div>
    );
  };


  const handleOpenModal = (picture) => {
    navigate(`/${picture.id}`);

    // console.log(picture)
    setModalPicture(picture.src);
    setModalIsOpen(true);
  }
  const handleCloseModal = () => {
    
    setModalPicture(null);
    setModalIsOpen(false);
  }

  return (
    <>
      {renderNav()}
      {renderCols()}
      {modalIsOpen ? <Modal isOpen={modalIsOpen} onClose={handleCloseModal} imgUrl={modalPicture} pictures={images}/> : null}
    </>
    
  )
}

export default Gallery