const express = require('express');
const { showblog, addblog, deleteblog, updateblog, editformblog} = require('../controller/blogcontroller');

const brouter = express.Router();

brouter.get("/showblog/:id",showblog)
brouter.get("/addblog",(req,resp)=>{
    resp.render("add")
})
brouter.post("/addblog",addblog)
brouter.delete("/deleteblog/:id",deleteblog)
brouter.put("/updateblog/:id",updateblog)
brouter.get("/editblog/:id",editformblog)
 

module.exports = brouter