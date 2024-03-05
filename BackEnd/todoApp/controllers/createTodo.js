const Todo = require("../models/todo")

// router handlers
exports.createTodo = async (req, res) => {
    try {
        // const {title, description} = req.body
        const title = req.body.title
        const description = req.body.description
        //create a new Todo object in dB
        const response = await Todo.create({ title, description })
        res.status(200).json({
            data: response,
            msg: 'Todo Created successfully'
        })
    }
    catch (err) {
        console.error(err.message)
        res.status(500).json({
            success: false,
            msg: err.message
        })
    }
}