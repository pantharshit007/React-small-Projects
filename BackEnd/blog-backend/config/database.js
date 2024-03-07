const mongoose = require("mongoose")
require('dotenv').config();

async function dbConnection() {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Connection to database established")

    } catch (err) {
        console.log("Connection Failed: " + err.message)
        process.exit(1);
    }
}

module.exports = dbConnection;