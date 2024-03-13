const File = require('../models/FileSchema');
const cloudinary = require('cloudinary').v2;

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(filename, folder) {
    const options = { folder };
    return await cloudinary.uploader.upload(filename.tempFilePath, options);
}

async function imageUpload(req, res) {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        //validation
        const supportingType = ['jpg', 'png', 'gif', 'jpeg'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportingType)) {
            res.status(404).json({
                success: false,
                message: 'File type not supported'
            })
        }

        // uploading file to cloudinary after successful validation
        const response = await uploadFileToCloudinary(file, "FolderApp");
        // console.log(response);

        // Entry in the db
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url
        })

        res.status(200).json({
            success: true,
            imageURL: response.secure_url,
            message: "Image uploaded successfully on Cloudinary.",
        })

    } catch (err) {
        console.error("Image upload failed: " + err.message)
        res.status(404).json({
            success: false,
            message: "Image Upload Failed: " + err.message,
        });
    }
}
async function videoUpload(req, res) {
    try {

    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
}
async function imageReducerUpload(req, res) {
    try {

    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
}
async function localFileUpload(req, res) {
    try {
        if (!req.files || !req.files.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        //fetching file from request
        let file = req.files.file;
        //creatinf file path inside server location
        let uploadPath = __dirname + '/localFiles/' + Date.now() + `.${file.name.split('.')[1]}`;

        // add file path to move function
        file.mv(uploadPath, (err) => {
            if (err) {
                return res.status(500).json({ message: err });
            }
            return res.status(200).json({ message: 'File uploaded successfully!' });
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message,
        });
    }
}


module.exports = {
    imageUpload, videoUpload, localFileUpload, imageReducerUpload
}