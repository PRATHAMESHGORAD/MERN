const blogModel = require("../model/blogmodel");
const {getIO} = require('../socket');//Because this controller needs access to the Socket.io server.
const redisClient = require("../redis")

exports.addBlog = async (req, res) => {

    try {

        const newBlog = new blogModel({

            title: req.body.title,
            content: req.body.content,
            imageUrl: req.body.imageUrl,
            author: req.body.author,

            // Logged in user becomes owner
            user: req.session.userId

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


exports.showBlog = async (req, res) => {
    
        const viewKey = `blog:${req.params.id}`;
        console.log("Increasing Redis view count...");
        redisClient.hincrby(viewKey,"views",1,(err,views)=>{
            if(err){
                console.log("redis error:", err);
                
            }else{
                console.log("current views:", views);
                
            }
        })
    try {

        const blog = await blogModel.findById(req.params.id);

        if (!blog) {

            return res.status(404).json({
                message: "Blog not found"
            });

        }

        res.status(200).json(blog);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

};



exports.updateBlog = async (req, res) => {

    try {

        const blog = await blogModel.findById(req.params.id);

        if (!blog) {

            return res.status(404).json({
                message: "Blog not found"
            });

        }

        // Owner Check
        if (blog.user.toString() !== req.session.userId) {

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

        const blog = await blogModel.findByIdAndDelete(req.params.id);
 redisClient.del("blogs")


        if(blog){

            return res.status(200).json({
                message:"Deleted"
            });

        }

        res.status(404).json({
            message:"Blog Not Found"
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
    const user = req.body.user;

    redisClient.sadd(`likes:${blogId}`,user,(err,result)=>{
        if(err){
            return res.status(500).json({message: "redis error"})
        }
        res.status(200).json({message: "liked",added: result})
    })
}