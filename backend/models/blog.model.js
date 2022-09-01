const mongoose = require("mongoose")

const Blog = mongoose.model(
    "Blog",
    new mongoose.Schema({
        title: String,
        author: String,
        publishStatus: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "PublishStatus",
            }
        ],
        images:[],
        content: String,
    })
)
module.exports = Blog