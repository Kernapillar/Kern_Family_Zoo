import { useState, useEffect} from 'react'
import '../App.css'
import '../styles/gallery.css'
import { GalleryColumn } from './galleryColumn'


const Gallery = (props) =>{
    const [columns, setColumns] = useState(5);
    const [width, setWidth] = useState(window.innerWidth);
    const [images, setImages] = useState(props.pics);

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

  const colArr = [[],[], [], [], []];

  const renderCols = () => {
    if (columns === 1) {
      return (
        <div className='gallery'>
        <GalleryColumn pics={colArr[0]}/>
      </div>
      )
    } else if (columns === 2) {
      return (
        <div className='gallery'>
        <GalleryColumn pics={colArr[0]}/>
        <GalleryColumn pics={colArr[1]}/>
      </div>
      )
    } else if (columns === 3) {
      return (
        <div className='gallery'>
        <GalleryColumn pics={colArr[0]}/>
        <GalleryColumn pics={colArr[1]}/>
        <GalleryColumn pics={colArr[2]}/>
      </div>
      )
    }  else if (columns === 4) {
      return (
        <div className='gallery'>
        <GalleryColumn pics={colArr[0]}/>
        <GalleryColumn pics={colArr[1]}/>
        <GalleryColumn pics={colArr[2]}/>
        <GalleryColumn pics={colArr[3]}/>
      </div>
      )
    } else {
      return (
        <div className='gallery'>
        <GalleryColumn pics={colArr[0]}/>
        <GalleryColumn pics={colArr[1]}/>
        <GalleryColumn pics={colArr[2]}/>
        <GalleryColumn pics={colArr[3]}/>
        <GalleryColumn pics={colArr[4]}/>
      </div>
      )
    }
  };
  for (let i = 0; i < images.length; i++) {
    colArr[i % columns].push(images[i])
  }

  return (
    <>
      {renderNav()}
      {renderCols()}
    </>
    
  )
}

export default Gallery