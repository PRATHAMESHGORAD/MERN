const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:String,
    concept:String,
    imageUrl:String,
    desp:String
},{timestamps:true})

const blogModel = mongoose.model("blog",blogSchema)
module.exports = blogModel