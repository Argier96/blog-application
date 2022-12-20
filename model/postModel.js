const mongoose = require('mongoose');
var postSchema = mongoose.Schema({
    author:String,
    title:String,
    body:String,
    date:Date
});

const addPost = async(data) =>{
    try{
        

        var Post = mongoose.model('Post', postSchema,'postInfos')
        
        var post1= new Post(data);
        post1.save(function (err, post) {
            if (err) return console.error(err);
            console.log(post.author + " saved to postInfos collection.");
          });  
    }catch(e){
        console.log(e);
    }
    // console.log(data);
} 

const getAllPost = async() => {
    return await mongoose.model('Post',postSchema,'postInfos').find();
}

const getPostbyAuthor = async(req) => {
    return await mongoose.model('Post',postSchema,'postInfos').find({author: req});
}
module.exports ={
    addPost,
    getAllPost,
    getPostbyAuthor
}