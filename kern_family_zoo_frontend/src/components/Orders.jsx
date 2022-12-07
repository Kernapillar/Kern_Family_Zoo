import React from "react";
import {Order} from "./Order.jsx";

export const Orders = ({orders}) => { // functional component version

    const ordersList = orders.map(order => <Order key={order.id} order={order} />);

    return (
        <ul className="orders-list">
            Orders: {ordersList}
        </ul>
    )
};


// class OrdersClass extends React.Component { // class component version
//     constructor(props) {
//         super(props);
//     }

//     render();
// };