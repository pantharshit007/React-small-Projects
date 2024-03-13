const express = require('express')
const app = express();
const fileUpload = require('express-fileupload')
const Database = require('./config/database');
const cloudinary = require('./config/cloudinary');
const uploadRoute = require('./routes/FileUploadRoute')

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/temp/'
}));
app.use('/api/v1/upload', uploadRoute);

app.get('/', function (req, res) {
    res.json({ msg: 'hi Mom!' })
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})

Database.connect();
cloudinary.cloudinaryConnect();


