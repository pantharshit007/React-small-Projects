const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;
const Database = require('./config/database')
const user = require('./routes/user');


app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        msg: "yo!"
    })
})

app.use('/api/v1', user);


app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

Database.connect();