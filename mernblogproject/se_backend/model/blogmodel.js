const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({

    title: String,

    content: String,

    imageUrl: String,

    author: String,

    user: {

        type: mongoose.Schema.Types.ObjectId,

        ref: "users"

    }

}, { timestamps: true });

module.exports = mongoose.model("blog", blogSchema);