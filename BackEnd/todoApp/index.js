const express = require('express')
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 4000;

//importing routes
const todoRoutes = require('./routes/todos')
const todo = require('./models/todo')

app.use(express.json())

app.get('/', async (req, res) => {

    const todos = await todo.find({}, { title: 1, description: 1, _id: 0 })
    return res.json({
        msg: 'hello',
        data: todos
    })
})

//mounting this specific API route for version 1 before todoRoutes
app.use('/api/v1', todoRoutes)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// connection to dB
const dbConnection = require('./config/database')
dbConnection();