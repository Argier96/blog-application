const userModel = require("../model/postModel");

const addPost = async(req,res) => {
    const result = await userModel.addPost(req.body);
    res.json(result);
}

const getAllPost = async(req,res) => {
    const result = await userModel.getAllPost();
    res.json(result);
}
const getPostbyAuthor = async(req,res) => {
    const author = req.params.author;
    const result = await userModel.getPostbyAuthor(author);
    res.json(result);
}

module.exports = {
    addPost,
    getAllPost,
    getPostbyAuthor
}