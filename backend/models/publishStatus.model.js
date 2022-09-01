const mongoose = require("mongoose")

const PublishStatus = mongoose.model(
    "PublishStatus",
    new mongoose.Schema({
        name: String
    })
)

module.exports = PublishStatus