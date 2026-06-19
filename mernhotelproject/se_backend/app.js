const express = require('express');
const cors = require('cors');
const {connectDB} = require('./db');
const router = require('./router/hotelroute')

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/hotel",router)

app.listen(2000,()=>{
    console.log("running");
    
})