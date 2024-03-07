const blogdB = require('../model/blogSchema');

async function comment(req, res) {
    try {
        const posts = await blogdB.find({})
        const comments = posts.map(post => post.comments).flat();

        res.status(200).json({
            data: comments,
            msg: "comments fetched successfully."
        })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            msg: "error displaying comments"
        })
    }
}


async function createComment(req, res) {
    try {
        const id = req.body.id;
        const newComment = req.body.comment;
        const post = await blogdB.findByIdAndUpdate(
            id, {
            $push: { comments: newComment }
        },
            { new: true })

        if (!post) {
            return res.status(404).json({ msg: "Post not found" });
        }

        res.status(200).json({
            data: post,
            msg: "Comment created successfully."
        })

    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            msg: "error creating comments"
        })
    }
}

module.exports = { comment, createComment }