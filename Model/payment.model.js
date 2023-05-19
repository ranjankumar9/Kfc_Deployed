const mongoose = require("mongoose")

const PaymentSchema = mongoose.Schema({
    cardnumber:{type:Number, required:true},
    expirydate:{type:Number, required:true},
    cvv:{type:Number, required:true}
},{
    versionKey:false
})

const PaymentModel = mongoose.model("payment", PaymentSchema)

module.exports = {
    PaymentModel
}