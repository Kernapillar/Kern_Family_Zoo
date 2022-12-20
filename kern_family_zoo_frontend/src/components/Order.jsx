import React from "react";
import { useState } from "react";

export const Order = ({order}) => {

    const [isComp, setIsComp] = useState(order.isComplete)

    const toggleCompletion = () => {
        setIsComp(!isComp);
    }

    return(
        <li className="order">
            <span>{order.name}</span>
            <span>{order.address}</span>
            <span>{order.items}</span>

            <button onClick={() => toggleCompletion()}>{isComp ? "mark incomplete" : "mark complete"}</button>
        </li>
    )   
};
