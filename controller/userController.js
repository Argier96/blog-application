const userModel = require("../model/userModel");

const addPost = async(req,res) => {
    const result = await userModel.addPost(req.body);
    res.json(result);
}

const getAllPost = async(req,res) => {
    const result = await userModel.getAllPost();
    res.json(result);
}

module.exports = {
    addPost,
    getAllPost
}