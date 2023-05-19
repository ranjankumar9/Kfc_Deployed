const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    userId: {type:String, required:true},
    images: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    orderStatus:{type:String, default:"Order Placed successfully"},
    date:{type:String, default: new Date().toLocaleString}
},{
    versionKey:false
})

const OrderModel = mongoose.model("order", OrderSchema) 

module.exports = {
    OrderModel
}