require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken')

function auth(req, res, next) {
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization").split(" ")[1]

        if (!token) {
            return res.status(401).json({
                success: false,
                msg: 'token missing'
            });
        }

        // token verifcation
        try {
            const decode = jwt.verify(token, JWT_SECRET);
            req.user = decode;
            // console.log(decode);

        } catch (err) {
            res.status(403).json({
                success: false,
                msg: "token is invalid: " + err.message
            });
        }
        next();

    } catch (err) {
        res.status(403).json({
            success: false,
            msg: "Something went wrong while verifying token: " + err.message
        });
    }
}

function isStudent(req, res, next) {
    try {
        if (req.user.role != 'Student') {
            return res.status(403).json({
                success: false,
                msg: 'You must be a Student'
            })
        }
        next();

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Error while Student Validation " + err.message
        });
    }
}

function isAdmin(req, res, next) {
    try {
        if (req.user.role != 'Admin') {
            return res.status(403).json({
                success: false,
                msg: 'You must be Admin'
            })
        }
        next();

    } catch (err) {
        res.status(500).json({
            success: false,
            msg: "Error while Admin Validation " + err.message
        });
    }
}

module.exports = {
    auth, isStudent, isAdmin
}