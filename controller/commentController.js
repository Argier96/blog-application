const commentModel = require("../model/commentModel");

const addComment = async(req,res) => {
    const result = await commentModel.addComment(req.body);
    res.json(result);
}

module.exports = {
    addComment,
};