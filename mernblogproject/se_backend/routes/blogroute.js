const express = require('express');
const { addBlog, showblogs, showBlog, updateBlog, deleteBlog, likeBlog, trendingBlogs } = require('../controller/blogcontroller');
const auth = require('../middleware/auth')
const adminonly = require('../middleware/adminonly');

const router = express.Router()

router.post("/add",auth,addBlog)
router.get("/",showblogs)
router.get("/showBlog/:id",showBlog)
router.put("/updateBlog/:id",auth,updateBlog)
router.delete("/deleteBlog/:id",auth,deleteBlog)
router.post("/like/:id",likeBlog)
router.get("/trending",trendingBlogs)

module.exports = router