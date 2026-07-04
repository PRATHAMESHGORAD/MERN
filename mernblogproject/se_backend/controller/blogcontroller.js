const blogModel = require("../model/blogmodel");
const {getIO} = require('../socket');//Because this controller needs access to the Socket.io server.
const redisClient = require("../redis")
const asyncHandler = require("../utils/asyncHandler")
const AppError = require ("../utils/AppError")
exports.addBlog = async (req, res) => {

    try {

        const newBlog = new blogModel({

            title: req.body.title,
            content: req.body.content,
            imageUrl: req.body.imageUrl,
            author: req.body.author,

            // Logged in user becomes owner
            user: req.user.id

        });

        const result = await newBlog.save();
        redisClient.del("blogs")
        //clear cache
       
        const io = getIO();

        io.to("technology").emit("newBlog",result)//Sends to every connected client.

        res.status(201).json(result);

    } catch (error) {

        console.log(error);
         console.log(error.message);
          console.log(error.stack);
        res.status(500).json({
            message: "Unable to create blog"
        });

    }

};



exports.showblogs = async(req,res)=>{
    try {
        redisClient.get("blogs",async(err,data)=>{
            if(err){
                console.log(err);
                
            }
            //cache hit
        if(data){
            console.log("data from redis");
            return res.status(200).json(JSON.parse(data))//parse: [{...},{...}]
            
        }
        console.log("data from mongodb");
        const blogs = await blogModel.find();
        //ssave into redis
        redisClient.set("blogs",JSON.stringify(blogs),"EX",60)
        res.status(200).json(blogs)
        })
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "unable to fetch blogs"})
        
    }
}


exports.showBlog = asyncHandler(
    async(req,res)=>{
        const blog = await blogModel.findById(req.params.id);
        if(!blog){
            throw new AppError("Blog not found",404)
        }
        res.json(blog)
    }
)


exports.updateBlog = async (req, res) => {

    try {

        const blog = await blogModel.findById(req.params.id);

        if (!blog) {

            return res.status(404).json({
                message: "Blog not found"
            });

        }

        // Owner Check
        if (blog.user.toString() !== req.user.id) {

            return res.status(403).json({
                message: "Access Denied"
            });

        }

        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.imageUrl = req.body.imageUrl;
        blog.author = req.body.author;

        await blog.save();
         redisClient.del("blogs")
       
        res.status(200).json({
            message: "Blog Updated Successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Update Failed"
        });

    }

};



exports.deleteBlog = async(req,res)=>{

    try{

        const blog = await blogModel.findById(req.params.id);

if(!blog){
    return res.status(404).json({
        message:"Blog Not Found"
    });
}

if(blog.user.toString() !== req.user.id){
    return res.status(403).json({
        message:"Access Denied"
    });
}

await blog.deleteOne();

redisClient.del("blogs");

return res.status(200).json({
    message:"Deleted"
});
    }

    catch(error){

        console.log(error);

        res.status(500).json({
            message:"Delete Failed"
        });

    }

}

exports.likeBlog = async(req,res)=>{
    const blogId = req.params.id;
    const user = req.user.id;

    redisClient.sadd(`likes:${blogId}`,user,(err,result)=>{
        if(err){
            console.log(err);
            
            return res.status(500).json({message: "redis error"})
        }
        res.status(200).json({message: "liked",added: result})
    })
}


exports.trendingBlogs = (req,res)=>{
    redisClient.zrevrange("trendingBlogs",0,4,"WITHSCORES",(err,result)=>{
        if(err){
            return res.status(500).json({message: "redis error"})
        }
        res.status(200).json(result)
    })
}