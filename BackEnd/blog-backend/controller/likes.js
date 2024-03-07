const blogdB = require('../model/blogSchema');

async function like(req, res) {
    try {
        // const likes = req.body.likes;
        const post = await blogdB.find({ likes: true });

        if (post.length == 0) {
            return res.status(404).json({
                msg: "No data found!"
            });
        }

        res.status(200).json({
            data: post,
            msg: 'Liked Post.'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            msg: "Error printing Liked posts"
        });
    }
}

async function unlike(req, res) {
    try {
        // const likes = req.body.likes;
        const post = await blogdB.find({ likes: false });

        if (post.length == 0) {
            return res.status(404).json({
                msg: "No data found!"
            });
        }

        res.status(200).json({
            data: post,
            msg: 'Unliked Post.'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            msg: "Error printing Unliked posts"
        });
    }
}

module.exports = { like, unlike };
