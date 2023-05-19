const express = require("express")
const { PaymentModel } = require("../Model/payment.model")

const PaymentRouter = express.Router()

PaymentRouter.post("/pay", async(req,res) => {
    try {
        const payed = new PaymentModel(req.body)
        await payed.save()
        res.send({'msg':"Payment successfully"})
    } catch (err) {
        res.send({"msg":"Plese Check again your Card Details", err: err.message})
    }
})

module.exports = {
    PaymentRouter
}