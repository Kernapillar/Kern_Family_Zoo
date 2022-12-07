import express from "express";
import { Order } from "../models/order.js";

const router = express.Router();

router.get("/", (req, res) => {
    Order.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(404).json(err))
        // get our Orders
        
});

router.post("/", (req, res) => {
    const newOrder = new Order({
        items: req.body.items, 
        name: req.body.name, 
        address: req.body.address,
    });

    newOrder.save()
        .then(order => res.json("your order has been received"))
        .catch(err => res.status(422).json(err))
});

router.patch("/:order_id", (req, res) => {
    const id = req.params.order_id;
    const updatedOrder = new Order({
        items: req.body.items, 
        name: req.body.name,
        address: req.body.address,
    });

    Order.findByIdAndUpdate(id, updatedOrder)
        .then((order) => res.json({order}))
        .catch((err) => res.status(404).json(err));

});

router.delete("/:order_id", (req, res) => {
    const id = req.params.order_id;
    Order.findOneAndDelete(id)
        .then((order) => res.json({id: order._id}))
        .catch((err) => res.status(404).json(err));
});

export const orders = router;