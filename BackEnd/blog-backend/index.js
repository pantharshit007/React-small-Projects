const express = require('express');
const app = express();
const postRoute = require('./route/postRoute');
const likeRoute = require('./route/likeRoute')
const commentRoute = require('./route/commentRoute')

require('dotenv').config();
PORT = process.env.PORT || 4000;

app.use(express.json())

//landing page
app.get('/', (req, res) => {
    res.send('<h1>Welcome! Bro</h1>');
})

//post route
app.use('/posts', postRoute);
app.use('/likes', likeRoute);
app.use('/comments', commentRoute);

//listening port
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

// dB connection
const dbConnection = require('./config/database')
dbConnection();