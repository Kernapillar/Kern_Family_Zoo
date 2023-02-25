import React from "react";
import { useState, useEffect } from "react";
import '../styles/gallery.css'

export const GalleryColumn = (props) => {
        if (!props.pics) return null; 
        return (
            <div className="column">
                {props.pics.map((image, i) => (
                    <img
                        key={i}
                        src={image.src}
                        alt=""
                        onClick={() => props.openModal(image.src)}
                    />
            ))}
            </div>
        )   
    
    
}