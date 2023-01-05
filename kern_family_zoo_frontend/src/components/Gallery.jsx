import React from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Img1 from '../../testPictures/Img1.jpeg'
import Img2 from '../../testPictures/Img2.jpeg'
import Img3 from '../../testPictures/Img3.jpeg'
import Img4 from '../../testPictures/Img4.jpeg'
import Img5 from '../../testPictures/Img5.jpeg'
import Img6 from '../../testPictures/Img6.jpeg'
import Img7 from '../../testPictures/Img7.jpeg'
import Img8 from '../../testPictures/Img8.jpeg'
import Img9 from '../../testPictures/Img9.jpg'
import Img10 from '../../testPictures/Img10.jpeg'
import Img11 from '../../testPictures/Img11.jpeg'
import Img12 from '../../testPictures/Img12.jpeg'
import Img13 from '../../testPictures/Img13.jpeg'
import Img14 from '../../testPictures/Img14.jpeg'
import Img15 from '../../testPictures/Img15.png'
import Img16 from '../../testPictures/Img16.jpg'
import Img17 from '../../testPictures/Img17.png'

export const Gallery = () => {

    const pics = [{id: 1, src: Img1, picture: "abc"}, 
                {id: 2, src: Img2, picture: "def"},
                {id: 3, src: Img3, picture: "ghi"},
                {id: 4, src: Img4, picture: "jkl"}, 
                {id: 5, src: Img5, picture: "mnop"},
                {id: 6, src: Img6, picture: "qrs"},
                {id: 7, src: Img7, picture: "abc"}, 
                {id: 8, src: Img8, picture: "def"},
                {id: 9, src: Img9, picture: "ghi"},
                {id: 10, src: Img10, picture: "jkl"}, 
                {id: 11, src: Img11, picture: "mnop"},
                {id: 12, src: Img12, picture: "qrs"},
                {id: 13, src: Img13, picture: "abc"}, 
                {id: 14, src: Img14, picture: "def"},
                {id: 15, src: Img15, picture: "ghi"},
                {id: 16, src: Img16, picture: "jkl"}, 
                {id: 17, src: Img17, picture: "mnop"},
  ]

    return (
        
            <Masonry>
                {pics.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        style={{width: "100%", display: "block"}}
                        alt=""
                    />
                ))}
            </Masonry>
    )
}