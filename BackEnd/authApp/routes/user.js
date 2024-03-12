const express = require('express');
const router = express.Router();

const { signup, login } = require('../controllers/auth')
const { auth, isStudent, isAdmin } = require('../middlewares/authMiddleware')


router.post('/signup', signup);
router.post('/login', login);

router.get('/student', auth, isStudent, (req, res) => {
    res.json({
        success: true,
        msg: "Protected Route for students"
    })
});
router.get('/admin', auth, isAdmin, (req, res) => {
    res.json({
        success: true,
        msg: "Protected Route for Admin"
    })
});

module.exports = router;