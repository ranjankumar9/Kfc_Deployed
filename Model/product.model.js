const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    images:{type:String, require:true},
    title:{type:String, require:true},
    category:{type:String, require:true},
    price:{type:Number, require:true},
    description:{type:String, require:true},
    cate:{type:String, require:true},
    sellerId: { type: String, required: true },
},{
    versionKey:false,
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = {
    ProductModel
}