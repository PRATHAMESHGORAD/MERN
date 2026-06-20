const express = require('express');
const { showblogs, showBlog, addBlog, updateBlog, deleteBlog } = require('../controller/blogcontroller');

const router = express.Router()

router.get("/showblogs",showblogs)
router.get("/showBlog/:id",showBlog)
router.post("/addBlog",addBlog)
router.put("/updateBlog/:id",updateBlog)
router.delete("/deleteBlog/:id",deleteBlog)

module.exports = router
