const express = require('express');
const likeRoute = express.Router();

const { like, unlike } = require('../controller/likes')


//likeRoutes
likeRoute.get('/like', like);
likeRoute.get('/unlike', unlike);

module.exports = likeRoute;