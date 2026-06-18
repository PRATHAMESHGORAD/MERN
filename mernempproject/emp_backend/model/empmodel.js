const mongoose = require('mongoose');

const empSchema = mongoose.Schema({
    name:String,
    salary:Number,
    dept:String,


},{timestamps:true})

const empModel = mongoose.model("emp",empSchema)

module.exports = empModel