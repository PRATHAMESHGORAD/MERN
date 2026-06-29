const express = require('express');
const { addBlog, showblogs, showBlog, updateBlog, deleteBlog, likeBlog, trendingBlogs } = require('../controller/blogcontroller');
const auth = require('../middleware/auth')
const adminonly = require('../middleware/adminonly');

const router = express.Router()

router.post("/add",addBlog)
router.get("/",showblogs)
router.get("/showBlog/:id",showBlog)
router.put("/updateBlog/:id",updateBlog)
router.delete("/deleteBlog/:id",deleteBlog)
router.post("/like/:id",likeBlog)
router.get("/trending",trendingBlogs)

module.exports = router