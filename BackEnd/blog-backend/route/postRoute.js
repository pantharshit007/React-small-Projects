const express = require('express');
const postRoute = express.Router();

const { posts, createPost } = require('../controller/post')


//postRoutes
postRoute.get('/', posts);
postRoute.post('/createPost', createPost);

module.exports = postRoute;