const express = require('express');
const { addBlog, showblogs, showBlog, updateBlog, deleteBlog } = require('../controller/blogcontroller');

const router = express.Router()

router.post("/add",addBlog)
router.get("/",showblogs)
router.get("/showBlog/:id",showBlog)
router.put("/updateBlog/:id",updateBlog)
router.delete("/deleteBlog/:id",deleteBlog)

module.exports = router