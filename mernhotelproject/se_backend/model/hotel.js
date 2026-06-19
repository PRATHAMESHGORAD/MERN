const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
    roomnumber:Number,
    roomtype:String,
    pricepernight:Number,
    capacity:Number
},{timestamps:true})

const hotelModel = mongoose.model("hotel",hotelSchema)

module.exports = hotelModel