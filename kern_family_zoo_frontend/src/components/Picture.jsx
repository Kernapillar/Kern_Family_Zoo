import React from "react";
import '../styles/picture.css'

export const Picture = ({picture}) => {


    return(
        <li className="picture">
            {`${picture}`}
        </li>
    )   
};
