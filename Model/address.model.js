const mongoose = require("mongoose")

const AddressSchema = mongoose.Schema({
    name:{type:String, require:true},
    email:{type:String, require:true},
    city:{type:String, require:true},
    mobile:{type:Number, require:true},
    state:{type:String, require:true},
    addressline:{type:String, require:true},
    zipcode:{type:Number, require:true},

},{
    versionKey:false
})

const AddressModel = mongoose.model("deliveraddress", AddressSchema)

module.exports = {
    AddressModel
}