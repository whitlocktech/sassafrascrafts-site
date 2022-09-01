const util = require("util")
const multer = require("multer")
const { GridFsStorage } = require("multer-gridfs-storage")
const dbConfig = require("../config/db.config")
var storage = new GridFsStorage({
    url: dbConfig.url + dbConfig.database, // Check this line in the tutorial before running
    options: { useNewUrlParser: true, useUnifiedTopology: true},
    file: (req, res) => {
        const match = ["image/png", "image/jpeg"]
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-sassafrascrafts-${file.orginalname}`
            return filename
        }
        return {
            bucketName: dbConfig.imgBucket,
            filename: `${Date.now()}-sassafrascrafts-${file.orginalname}`
        }
    }
})
var uploadFiles = multer({ storage:storage }).single("file")
var uploadFilesMiddleware = util.promisify(uploadFiles)
module.exports = uploadFilesMiddleware