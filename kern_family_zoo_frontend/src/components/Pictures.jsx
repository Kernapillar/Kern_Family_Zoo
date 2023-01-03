import React from "react";
import {Picture} from "./Picture.jsx";
import '../styles/gallery.css'

export const Pictures = ({pictures}) => { 

    const picturesList = pictures.map(picture => <Picture key={picture.id} picture={picture.picture} />);

    return (
        <ul className="gallery">
            {picturesList}
        </ul>
    )
};

