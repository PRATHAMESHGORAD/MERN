const blogModel = require("../model/blogmodel");
const {getIO} = require('../socket');//Because this controller needs access to the Socket.io server.
let blogCache = null;
// =====================
// Add Blog
// =====================
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
        //clear cache
        blogCache = null;
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


// =====================
// Show All Blogs
// =====================
exports.showblogs = async(req,res)=>{
    try {
        if(blogCache){
            console.log("data from local cache");
            return res.status(200).json(blogCache)
            
        }
        console.log("data from mongodb");
        const blogs = await blogModel.find();
        //ssave in memory
        blogCache = blogs;
        res.status(200).json(blogs)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "unable to fetch blogs"})
        
    }
}

// =====================
// Show Single Blog
// =====================
exports.showBlog = async (req, res) => {

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


// =====================
// Update Blog
// =====================
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
        blogCache = null;
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


// =====================
// Delete Blog
// =====================
exports.deleteBlog = async(req,res)=>{

    try{

        const blog = await blogModel.findByIdAndDelete(req.params.id);

        blogCache = null;

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