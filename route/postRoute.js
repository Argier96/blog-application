const express = require('express');
const route = express();
const userController = require('../controller/postController')

route.post("/addPost",userController.addPost)
     .get('/getPost', userController.getAllPost)
     .get('/getPostby/:author',userController.getPostbyAuthor)
     .delete('/deletePost/:_id',userController.deletePost)

module.exports = route;