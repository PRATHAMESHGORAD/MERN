const express = require('express');
const cors = require('cors');
const router = require('./routes/emprouter');
const {connectDB} = require('./db');

const app = express()
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/emp",router)

app.listen(2000,()=>{
    console.log("running");
    
})