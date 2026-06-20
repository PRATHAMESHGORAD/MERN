const express = require('express');
const router = require('./router/blogrouter');
const {connectDB} = require('./db');
const cors = require('cors');

const app = express()
connectDB()
app.use(express.json())
app.use(cors())
app.use("/blog",router)
app.listen(2000,()=>{
    console.log("running");
    
})