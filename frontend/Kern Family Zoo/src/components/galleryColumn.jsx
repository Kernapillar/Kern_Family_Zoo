import React from "react";
import { useState, useEffect } from "react";
import Img1 from '../testPictures/Img1.jpeg'
import Img2 from '../testPictures/Img2.jpeg'
import Img3 from '../testPictures/Img3.jpeg'
import Img4 from '../testPictures/Img4.jpeg'
import Img5 from '../testPictures/Img5.jpeg'
import Img6 from '../testPictures/Img6.jpeg'
import Img7 from '../testPictures/Img7.jpeg'
import Img8 from '../testPictures/Img8.jpeg'
import Img9 from '../testPictures/Img9.jpg'
import Img10 from '../testPictures/Img10.jpeg'
import Img11 from '../testPictures/Img11.jpeg'
import Img12 from '../testPictures/Img12.jpeg'
import Img13 from '../testPictures/Img13.jpeg'
import Img14 from '../testPictures/Img14.jpeg'
import Img15 from '../testPictures/Img15.png'
import Img16 from '../testPictures/Img16.jpg'
import Img17 from '../testPictures/Img17.png'

export const GalleryColumn = (props) => {

        return (
            <div className="column">
                {props.pics.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        style={{width: "450px", display: "block"}}
                        alt=""
                    />
            ))}
            </div>
        )   
    
    
}