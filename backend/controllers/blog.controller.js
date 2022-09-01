const { v4: uuidv4 } = require('uuid')
const db = require("../models")
const Blog = db.blog

exports.getPosts = (req, res) => {
//    const Blog = req.query.title
    Blog.find()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the blog posts."
            })
        })
}
exports.createPost = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ message: "Title Can not be empty!"})
        return
    }
    const blog = new Blog({
        _id: uuidv4(),
        title: req.body.title,
        author: req.body.author,
        published: req.body.published,
        content: req.body.content
    })
    blog
    .save(blog)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while create the post"
        })
    })
} 

// method of finding individual posts
exports.getPost = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "No post found with that id"})
            else res.send(data)
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Post with id=" + id})
        })
}
exports.updatePost = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update cannot be empty"
        })
    }
    const id = req.params.id
    Blog.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Blog Post with id=${id} Maybe it was not found.`
                })
            } else res.send({ message: "Blog Post was updated successfully"})
        })
        .catch(err => {
            res.status(500).send({
                message: "Error with updating Blog Post with id=" + id
            })
        })
}
exports.deletePost = (req, res) => {
    const id = req.params.id
    Blog.findByIdAndRemove(id)
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: "Cannot delete Blog Post with id=${id} Maybe it doesn't exist"
                })
            } else {
                res.send({
                    message: "Blog Post Was updated successfully"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Blog Post with id=" + id
            })
        })
}
exports.findAllPublished = (req, res) => {
    Blog.find({ published: true})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some Error Occurred while retrieving the published blog posts."
            })
        })
}