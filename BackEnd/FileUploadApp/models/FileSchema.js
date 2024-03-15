const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = require('../config/mailTransporter')

const fileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    tags: {
        type: String,
    },
    email: {
        type: String,
    }
});

// post Middelware
fileSchema.post('save', async function (doc) {
    try {
        //Transporter
        //TODO: shift to config Folder
        // let transporter = nodemailer.createTransport({
        //     host: process.env.MAIL_HOST,
        //     auth: {
        //         user: process.env.MAIL_USER,
        //         pass: process.env.MAIL_PASS
        //     }
        // });

        //send Mail
        let info = await transporter.sendMail({
            from: `FileUploadApp @pantHarshit`,
            to: doc.email,
            subject: 'New File Uploaded on Cloudinary',
            html: `<h2>Hey, ${doc.name}!</h2>
                    <h3>File Uploaded! ✨</h3>
                    <p>View Here: <a href=${doc.imageUrl}>here 🔗</a></p>`
        })

        // console.log(info)

    } catch (err) {
        console.log("Mail Not sent: " + err.message);
    }
})

module.exports = mongoose.model('File', fileSchema);