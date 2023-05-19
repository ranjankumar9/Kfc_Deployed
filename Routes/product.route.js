const express = require("express")
const { ProductModel } = require("../Model/product.model")

const ProductRouter = express.Router()

ProductRouter.get("/", async (req, res) => {
    const { title, category, cate } = req.query;
    if (title && category) {
        const data = await ProductModel.find({ title, category })
        res.send({data})
    }
    else if (cate) {
        const product = await ProductModel.find({ cate })
        res.send(product)
    }
    else if (category) {
        const product = await ProductModel.find({ category })
        res.send(product)
    }
    else if (title) {
        const product = await ProductModel.find({ title })
        res.send(product)
    }
    else {
        const product = await ProductModel.find()
        res.send({ product })
    }
})

ProductRouter.get("/get/:id", async (req, res) => {
    try {
        const { id } = req.params
        const product = await ProductModel.find({ _id: id });
        res.send(product)

    } catch (err) {
        console.log(err)
        res.send({ "Msg": "Something Went Wrong" })
    }
})

module.exports = {
    ProductRouter
}