const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog"
    },
    user:String,
    message:String
},{timestamps:true})

module.exports = mongoose.model("comment",commentSchema)