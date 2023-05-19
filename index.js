const express = require("express")
const { connection } = require("./Utils/db")
const { userRouter } = require("./Routes/user.route")
const { ProductRouter } = require("./Routes/product.route")
const { CartRouter } = require("./Routes/cart.route")
const { authenticate } = require("./middleware/authenticate.middleware")
require('dotenv').config()
var cors = require('cors')
const { OrderRouter } = require("./Routes/order.route")
const { SellerRouter } = require("./Routes/sellerproduct.route")
const { sellerUserRouter } = require("./Routes/seller.route")
const { SellerAuthenticate } = require("./middleware/seller.middleware")
const { AddressRouter } = require("./Routes/address.route")
const { PaymentRouter } = require("./Routes/payment.route")

const app = express()



app.get("/",(req,res) => {
    res.send("Welcome to KFC Backend")
})

app.use(cors())
app.use(express.json())
app.use("/users", userRouter)
app.use("/product", ProductRouter)
app.use("/cart",authenticate, CartRouter)
app.use("/orders",authenticate, OrderRouter)
app.use("/seller", sellerUserRouter)
app.use("/seller",SellerAuthenticate, SellerRouter)
app.use("/payment", AddressRouter)
app.use("/payment", PaymentRouter)

app.listen(process.env.port, async() => {
    try {
        await connection
        console.log("Connnected To The Database") 
    } catch (error) {
        console.log("DataBase connection Failed")
    }
    console.log(`Server is Running at the port ${process.env.port}`)
})