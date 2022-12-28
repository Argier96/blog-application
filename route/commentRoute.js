const express = require('express');
const route = express();
const commentController = require("../controller/commentController")

route.post('/addComment',commentController.addComment)

module.exports = route;