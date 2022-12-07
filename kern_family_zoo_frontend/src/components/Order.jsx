import React from "react";
export const Order = ({order}) => {
    const toggleCompletion = () => {
        console.log(order.isComplete);
    }
    return(
        <li className="order">
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>

            <button onClick={toggleCompletion} >{order.isComplete ? "mark incomplete" : "mark complete"}</button>
        </li>
    )   
};
