const Todos = require("../models/todo");

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        await Todos.findByIdAndDelete(id);
        res.status(200).json({
            msg: "Todos deleted successfully",
        })

    }
    catch (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
    }
}
