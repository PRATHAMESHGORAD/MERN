const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:String,
    content:String,
    imageUrl:String,
    author:String

},{timestamps:true})

const blogModel = mongoose.model("blog",blogSchema)

module.exports = blogModel