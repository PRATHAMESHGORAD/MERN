console.log("comment router loaded");


const express = require('express');
const { addComment, showComment } = require('../controller/commentcontroller');
const router = express.Router()

router.post("/add",(req,res,next)=>{

    console.log("POST /comment/add");

    next();

},addComment);
router.get("/:blogId",showComment)
module.exports = router