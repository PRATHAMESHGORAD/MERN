const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    desp:{
        type:String,
        required:true
    }
    
},{timestamps:true})

const blogModel = mongoose.model("blog",blogSchema)

module.exports = blogModel