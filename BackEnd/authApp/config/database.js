const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connection established")
    } catch (err) {
        console.log("Database connection error: ")
        console.error(err.message);
        process.exit(1);
    }

}