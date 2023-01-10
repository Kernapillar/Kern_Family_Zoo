import React from "react";
import { useState, useEffect } from "react";


export const GalleryColumn = (props) => {
        if (!props.pics) return null; 
        return (
            <div className="column">
                {props.pics.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        style={{width: "330px", display: "block"}}
                        alt=""
                    />
            ))}
            </div>
        )   
    
    
}