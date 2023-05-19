const express = require("express")
const { AddressModel } = require("../Model/address.model")

const AddressRouter = express.Router()

AddressRouter.post("/address", async(req,res) => {
    try {
        const address = new AddressModel(req.body)
        await address.save()
        res.send({"msg":"Address Registered Successfully"})
    } catch (er) {
        res.send({"msg":"Address register Failed", "err":er.message })
    }
})

module.exports = {
    AddressRouter
}