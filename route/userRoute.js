const express = require('express');
const route = express();
const userController = require('../controller/userController')

route.post("/",userController.addPost)
     .get('/', userController.getAllPost)


module.exports = route;