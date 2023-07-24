const Post = require('../models/post');
module.exports.create = async function (req, res) {
    console.log("This is req.body " ,req.body)
try{
        await Post.uploadedPost(req , res , async function(err){
            if(err){console.log("Multer Error" , err)};
            let post = {
                caption: req.body.caption,
                user: req.user._id,
                image: Post.postPath + '/' + req.file.filename,
            }
            let newPost = await Post.create(post)
            if(!newPost){
                return res.send(500 , {
                    message: "Internal Server Error"
                })
            }
            return res.send(200 , {
                message: "Post Created Successfully",
                data: {
                    post: newPost
                }
            })
        })
}catch(err){
    if(err){
        console.log("There is an error" ,err);
        return
    }
}
}