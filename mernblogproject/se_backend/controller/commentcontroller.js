
const commentModel = require("../model/commentmodel")
const {getIO} = require("../socket")

exports.addComment = async(req,res)=>{
    try {
        const comment = await commentModel.create({
            blog:req.body.blog,
            user:req.body.user,
            message:req.body.message
        })
        const io = getIO()
        io.to(comment.blog.toString()).emit("newComment",comment)
        res.status(201).json(comment)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "unable to add comment"
        })
        
    }
}

exports.showComment = async (req, res) => {
    try {

        const comments = await commentModel.find({
            blog: req.params.blogId
        });

        res.status(200).json(comments);

    } catch (error) {

        console.log("========== ERROR ==========");
        console.log(error);
        console.log(error.message);
        console.log("===========================");

        res.status(500).json({
            message: "Unable to fetch comments"
        });

    }
};