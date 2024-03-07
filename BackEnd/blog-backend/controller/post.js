const blogdB = require('../model/blogSchema');

async function posts(req, res) {
    try {
        const post = await blogdB.find({})
        res.status(200).json({
            data: post,
            msg: "post fetched successfully."
        })

    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            msg: "error displaying posts"
        })
    }
}

async function createPost(req, res) {
    try {
        const { title, description, likes, comments } = req.body;
        const response = await blogdB.create({ title, description, likes, comments });
        res.status(200).json({
            data: response,
            msg: "post created successfully."
        })

    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            msg: "error creating post: " + err.message
        })
    }
}

module.exports = { posts, createPost };
