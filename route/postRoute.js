const express = require('express');
const route = express();
const userController = require('../controller/postController')

route.post("/addPost",userController.addPost)
     .get('/getPost', userController.getAllPost)
     .get('/getPostby/:author',userController.getPostbyAuthor)

module.exports = route;