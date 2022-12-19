const express = require('express');
const route = express();
const userController = require('../controller/userController')

route.post("/",userController.addPost)


module.exports = route;