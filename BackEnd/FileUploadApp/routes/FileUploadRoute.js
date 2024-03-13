const express = require('express');
const Router = express.Router();

const { imageUpload, videoUpload, imageReducerUpload, localFileUpload } = require('../controllers/fileUpload');

Router.post('/imageUpload', imageUpload);
Router.post('/videoUpload', videoUpload);
Router.post('/imageReducerUpload', imageReducerUpload);
Router.post('/localFileUpload', localFileUpload);

module.exports = Router;    