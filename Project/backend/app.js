const express = require('express');
const session = require('express-session');
const {connectDB}= require('./db')
const router = require('../backend/router/userrouter')
const methodOverride = require('method-override');
const brouter = require('./router/blogrouter');

const app = express()
connectDB()
app.use(session({
    secret:"blogapp",
    resave:false,
    saveUninitialized:false
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.set("view engine","ejs")
app.use("/",router)
app.use("/",brouter)


app.listen(2000,()=>{
    console.log("running");
    
})