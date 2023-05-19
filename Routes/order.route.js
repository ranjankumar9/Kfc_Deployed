const express = require("express");
const { OrderModel } = require("../Model/order.model");
const { CartModel } = require("../Model/cart.model");

const OrderRouter = express.Router()

OrderRouter.get("/get", async(req,res) => {
    try {
        const { userId } = req.body;
        const orders = await OrderModel.find({ userId });
        res.send(orders);
    } catch (err) {
        res.send({ msg: "Something went wrong. Please try again later", "error": err });
    }
})

OrderRouter.post("/post", async(req,res) => {
    try {
        const { userId } = req.body;
        await OrderModel.insertMany(req.body)
        await CartModel.deleteMany({userId})
        res.send({ msg: "Order placed successfully" });
    } catch (err) {
        res.send({ msg: "Something went wrong. Please try again later", err });
    }
})

module.exports = {
    OrderRouter
}