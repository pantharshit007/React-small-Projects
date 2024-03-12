const bcrypt = require('bcrypt');
const userSchema = require('../module/userSchema');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

async function signup(req, res, next) {
    const maxRetries = 3;
    let retryCount = 0;

    while (retryCount < maxRetries) {
        try {
            const { name, email, password, role } = req.body;
            const existingUser = await userSchema.findOne({ email: email });

            if (existingUser) {
                return res.status(403).json({
                    success: false,
                    msg: 'User already registered/exists',
                });
            }

            //hashing password
            // hash(pass, number of rounds)
            let hashedPassword;
            try {
                hashedPassword = await bcrypt.hash(password, 10);
            } catch (err) {
                return res.status(500).json({
                    msg: 'Error hashing password: ' + err.message,
                });
            }

            //creation of new user account
            const newUser = await userSchema.create({
                name,
                email,
                password: hashedPassword,
                role,
            });

            return res.status(200).json({
                success: true,
                data: newUser,
                msg: 'User created successfully',
            });
        } catch (err) {
            retryCount++;
            if (retryCount === maxRetries) {
                return res.status(500).json({
                    success: false,
                    msg: 'User cannot be registered after ' + maxRetries + ' attempts: ' + err.message,
                });
            }
            // Wait for a moment before retrying
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                msg: 'Invalid email or password'
            });
        }

        const user = await userSchema.findOne({ email })
        if (!user) {
            return res.status(401).json({
                success: false,
                msg: 'Not a registered User'
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role,
        }

        //pass verification and JWT token generation
        const passAuthentication = await bcrypt.compare(password, user.password)
        if (passAuthentication) {
            let token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
            // user.token = token;
            // Create a new object with the user properties and add the token
            const userWithToken = user.toObject();
            userWithToken.token = token;
            userWithToken.password = undefined;

            // console.log(userWithToken);

            const options = {
                httpOnly: true, // prevents client-side JS from reading the cookie
                expires: new Date(Date.now() + 2 * 60 * 60 * 1000), // cookie will be removed after 2 hr
            }

            res.cookie('token', token, options);
            res.status(200).json({
                success: true,
                user: userWithToken,
                token: JSON.stringify(token),
                msg: "Login Successfully"
            })

        } else {
            //pass doesn't validate
            return res.status(401).json({
                success: false,
                msg: 'Login failed. Incorrect password.'
            })
        }

    } catch (err) {
        return res.status(500).json({
            msg: 'Login failed: ' + err.message,
        });
    }
}

module.exports = {
    signup: signup,
    login: login,
};
