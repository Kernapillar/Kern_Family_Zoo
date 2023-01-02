import React from "react";
import {Picture} from "./Picture.jsx";

export const Pictures = ({pictures}) => { // functional component version

    const picturesList = pictures.map(picture => <Picture key={picture.id} picture={picture.picture} />);

    return (
        <ul className="pictures-list">
            {picturesList}
        </ul>
    )
};


// class OrdersClass extends React.Component { // class component version
//     constructor(props) {
//         super(props);
//     }

//     render();
// };