const express = require("express");
const { CartModel } = require("../Model/cart.model");

const CartRouter = express.Router()

CartRouter.get("/", async(req,res) => {
    try {
        const { userId } = req.body;
        const userData = await CartModel.find({ userId });
        res.send(userData);
      } catch (error) {
        res.send({ msg: "Something went wrong. Please try again later", error });
      }
})

CartRouter.post("/add", async (req, res) => {
    try {
      const userData = new CartModel(req.body);
      await userData.save();
      res.send({ msg: "Item added to the Cart" });
    } catch (error) {
      res.send({ msg: "Something went wrong. Please try again later", error });
    }
  });
  
  CartRouter.patch("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const payload = req.body
      await CartModel.findByIdAndUpdate({ _id: id }, payload);
      res.send({ msg: "Item Quantity Updated" });
    } catch (error) {
      res.send({ msg: "Something went wrong. Please try again later", error });
    }
  });
  
  CartRouter.delete("/delete/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await CartModel.findByIdAndDelete({ _id: id });
      res.send({ msg: "Item deleted from Cart" });
    } catch (error) {
      res.send({ msg: "Something went wrong. Please try again later", error });
    }
  });

module.exports = {
    CartRouter
}