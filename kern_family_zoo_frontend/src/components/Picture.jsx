import React from "react";
import '../styles/picture.css'


// export const Picture = ({picture}) => {


//     return(
//         <li className="picture">
//             {`${picture}`}
//         </li>
//     )   
// };

export const Picture = ({picture}) => {


    return(
        <div className="picture" key={picture.key}>
            <img src={picture.src}  />
        </div>
    )   
};