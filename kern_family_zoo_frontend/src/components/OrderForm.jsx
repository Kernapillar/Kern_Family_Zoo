import React from "react";
import { useState } from "react";

export const OrderForm = () => {
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [items, setItems] = useState();


 
    return(
        <form action="">
            <input type="text" className="form-name" onChange={setName(value)} value={name}/>
            <input type="text" className="form-address" onChange={setAddress(value)} value={address}/>
            <input type="text" className="form-items" onChange={setItems(value)} value={items}/>

            <button type="submit">submit order</button>
        </form>
    )

};