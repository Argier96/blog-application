const express = require('express');
const route = express();
const multer = require("multer");
const commentController = require("../controller/commentController");
const upload = multer({dest: 'uploads/'});


route.post('/addComment',upload.single(''),commentController.addComment)

module.exports = route;