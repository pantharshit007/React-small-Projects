const File = require('../models/FileSchema');
const cloudinary = require('cloudinary').v2;

function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

async function uploadFileToCloudinary(file, folder, quality = 80) {   // Set a default quality
    const options = {
        folder,
        resource_type: "auto",
        quality: quality,
        transformation: [{ quality: quality }] // Apply quality setting 
    };
    // if (quality) options.quality = quality;
    return await cloudinary.uploader.upload(file.tempFilePath, options);

    // Check if the file is an image or a video : file object has a property called mimetype
    const isImage = file.mimetype.startsWith('image');
    const isVideo = file.mimetype.startsWith('video');

    if (isImage) {
        return await cloudinary.uploader.upload(file.tempFilePath, options);
    } else if (isVideo) {
        //below code provides path also, but its slower and duplication possible
        // return await cloudinary.uploader.upload(file.tempFilePath, options);
        //below code doesn't provide path, but its faster and duplication not possible
        return await cloudinary.uploader.upload_large(file.tempFilePath, options);

    } else {
        throw new Error('Unsupported file type');
    }
}

async function imageUpload(req, res) {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        //validation
        const supportingType = ['jpg', 'png', 'gif', 'jpeg'];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportingType)) {
            return res.status(404).json({
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
        const { name, tags, email } = req.body;
        // console.log(name, tags, email);
        const file = req.files.videoFile;
        // console.log(file)

        //validation
        const supportingType = ['mp4', 'mkv', 'mov'];
        const fileType = file.name.split('.')[1].toLowerCase();

        //TODO: checking whether video size is greater than 5MB
        if (!isFileTypeSupported(fileType, supportingType)) {
            return res.status(404).json({
                success: false,
                message: 'File type not supported'
            })
        }

        // uploading file to cloudinary after successful validation
        const response = await uploadFileToCloudinary(file, "FolderApp");

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
            message: "Video uploaded successfully on Cloudinary.",
        })

    } catch (err) {
        console.error("Video upload failed: " + err.message)
        res.status(404).json({
            success: false,
            message: "Video Upload Failed: " + err.message,
        });
    }
}

async function imageReducerUpload(req, res) {
    try {
        const { name, tags, email } = req.body;

        const file = req.files.reduceFile;
        // console.log(file)

        //validation
        const supportingType = ['jpg', 'png', 'gif', 'jpeg'];
        const fileType = file.name.split('.')[1].toLowerCase();

        //TODO: checking whether video size is greater than 5MB
        if (!isFileTypeSupported(fileType, supportingType)) {
            return res.status(404).json({
                success: false,
                message: 'File type not supported'
            })
        }

        // uploading file to cloudinary after successful validation
        // 3rd value is for quality
        const response = await uploadFileToCloudinary(file, "FolderApp", 50);

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
            message: "Compressed Image uploaded successfully on Cloudinary.",
        })

    } catch (err) {
        console.error("Reduced Image upload failed: " + err.message)
        res.status(404).json({
            success: false,
            message: "Reduced Image Upload Failed: " + err.message,
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