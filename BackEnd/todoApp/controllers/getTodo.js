const Todos = require("../models/todo")

exports.getTodos = async (req, res) => {
    try {
        // fetching all todo object from db
        const todo = await Todos.find({})
        res.status(200).json({
            data: todo,
            msg: "data printed"
        })
    }
    catch (err) {
        console.err(err.message)
        res.status(500).json({
            msg: "error printing todo object"
        })
    }
}

exports.getTodoById = async (req, res) => {
    try {
        //extract based on ID
        const id = req.params.id;
        const todo = await Todos.findById(id);
        res.status(200).json({
            data: todo,
            msg: "data specific to Id printed"
        })

        if (!todo) {
            res.status(404).json({
                msg: "No data found!"
            })
        }

    }
    catch (err) {
        console.err(err.message)
        res.status(500).json({
            msg: "error printing todo object"
        })
    }
}