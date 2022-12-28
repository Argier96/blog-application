const express = require('express');
const route = express();
const multer = require("multer");
const userController = require('../controller/postController');
const upload = multer({dest: 'uploads/'});


route.post("/addPost",upload.single(''),userController.addPost)
     .get('/getPost', userController.getAllPost)
     .get('/getPostby/:author',userController.getPostbyAuthor)
     .delete('/deletePost/:_id',userController.deletePost)

module.exports = route;
