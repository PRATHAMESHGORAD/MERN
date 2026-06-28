const express = require('express');
const { addBlog, showblogs, showBlog, updateBlog, deleteBlog, likeBlog } = require('../controller/blogcontroller');
const auth = require('../middleware/auth')
const adminonly = require('../middleware/adminonly');

const router = express.Router()

router.post("/add",addBlog)
router.get("/",showblogs)
router.get("/showBlog/:id",showBlog)
router.put("/updateBlog/:id",updateBlog)
router.delete("/deleteBlog/:id",deleteBlog)
router.post("/like/:id",likeBlog)

module.exports = router