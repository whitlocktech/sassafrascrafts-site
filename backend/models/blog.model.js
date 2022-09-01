
//const { ObjectID } = require("bson")
const mongoose = require("mongoose")

const Blog = mongoose.model(
    "Blog",
    new mongoose.Schema({
        _id: String,
        title: String,
        author: String,
        content: String,
        published: Boolean,
        images:[]
    })
)
module.exports = Blog
