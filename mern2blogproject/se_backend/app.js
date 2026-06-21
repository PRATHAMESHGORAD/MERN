const express = require('express');
const {connectDB} = require('./db');
const router = require('./router/blogrouter')
const cors = require('cors');

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use('/blog',router)

app.listen(2000,()=>{
    console.log("runnig");
    
})