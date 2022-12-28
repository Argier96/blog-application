const mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    postId:String,
    likE:Number,
    description:String,
    commentator:String,
    date:Date
})

const addComment = async(data) =>{
    try{
        

        var Comment = mongoose.model('Post', commentSchema,'Comments')
        
        var comment1= new Comment(data);
        comment1.save(function (err, comment) {
            if (err) return console.error(err);
            console.log(comment.commentator + " saved to Comments collection.");
          });  
    }catch(e){
        console.log(e);
    }
} 

module.exports ={
    addComment
}
