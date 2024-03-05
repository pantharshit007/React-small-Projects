const express = require('express');
const router = express.Router();

const { createTodo } = require('../controllers/createTodo')

//API routes
router.post('/createTodo', createTodo)

module.exports = router;