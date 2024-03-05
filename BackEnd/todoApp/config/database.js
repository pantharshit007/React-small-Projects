const mongoose = require('mongoose');
require("dotenv").config();

const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => console.log("Connection with dB Established"))
        .catch((e) => {
            console.log("Connection Failed: " + e.message)
            process.exit(1);
        })
}

module.exports = dbConnection;