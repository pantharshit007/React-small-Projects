const Todos = require("../models/todo");

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedUser = await Todos.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                    updatedAt: Date.now(),
                },
            },
            { new: true }   // This line makes sure that the updated document is returned
        );

        if (!updatedUser) {
            // Handle the case where no document was found with the specified ID
            return res.status(404).json({
                msg: 'No todo found with the provided ID',
            });
        }

        res.status(200).json({
            data: updatedUser,
            msg: 'Data updated successfully',
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error: ' + err);
    }
};
