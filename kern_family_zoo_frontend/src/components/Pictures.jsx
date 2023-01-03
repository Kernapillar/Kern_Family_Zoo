import React from "react";
import {Picture} from "./Picture.jsx";

export const Pictures = ({pictures}) => { 

    const picturesList = pictures.map(picture => <Picture key={picture.id} picture={picture.picture} />);

    return (
        <ul className="pictures-list">
            {picturesList}
        </ul>
    )
};

