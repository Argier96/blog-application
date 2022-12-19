const mongoose = require('mongoose');

const addPost = async(data) =>{
    try{
        var postSchema = mongoose.Schema({
            author:String,
            title:String,
            body:String,
            date:Date
        });

        var Post = mongoose.model('Post', postSchema,'postInfos')
        
        var post1= new Post(data);
        post1.save(function (err, post) {
            if (err) return console.error(err);
            console.log(post.author + " saved to bookstore collection.");
          });  
    }catch(e){
        console.log(e);
    }
    // console.log(data);
}   
module.exports ={
    addPost,
}