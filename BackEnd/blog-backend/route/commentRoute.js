const express = require('express');
const commentRoute = express.Router();

const { comment, createComment } = require('../controller/comments')


//commentRoutes
commentRoute.get('/', comment);
commentRoute.put('/createComment', createComment);

module.exports = commentRoute;