const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://mongodb:27017/mernproject")
        .then(() => {
            console.log("MongoDB Connected");
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = { connectDB };//merged values 
//added
//hard
//devoned
//added
//git
//remove
//log
//give
//romen
//reded