
const { authJwt } = require("../middlewares")
const controller= require("../controllers/blog.controller")

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        )
        next()
    })
    // CreateBlogPost endpoint
    app.post("/api/blog/post", [authJwt.verifyToken, authJwt.isAdmin], controller.createPost)

    // Get all blog posts
    app.get("/api/blog/posts", controller.getPosts)

    // Get all published Posts
    app.get("/api/blog/published", controller.findAllPublished)

    // Retrieve a single post NOT CURRENTLY WORKING
    app.get("/api/blog/post/:id", controller.getPost)

    // Update post by id
    app.put("/api/blog/post/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.updatePost)

    // Delete post by id
    app.delete("/api/blog/post/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.deletePost)
}
