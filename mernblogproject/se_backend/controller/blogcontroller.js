const blogModel = require("../model/blogmodel")

exports.addBlog = async(req,resp)=>{
   const new_blog = new blogModel({

    ...req.body,

    user:req.session.userId

})
    const result = await new_blog.save()
    resp.status(200).json(result)

}

exports.showblogs = async(req,resp)=>{
    const blogs = await blogModel.find()
    if (blogs != null) {
        resp.status(200).json(blogs)
    } else {
        resp.status(404).json({message : 'no blogs'})
    }
}

exports.showBlog = async (req,resp)=>{
    const blog = await blogModel.findById(req.params.id)
    if (blog != null) {
        resp.status(200).json(blog)
    } else {
        resp.status(404).json({message: 'not record found'})
    }
}

exports.updateBlog = async(req,res)=>{

    const blog =
    await blogModel.findById(
        req.params.id
    );

    if(

        blog.user.toString()

        !==

        req.session.userId

    ){

        return res.status(403)
        .json({
            message:"Access Denied"
        });

    }

    await blogModel.findByIdAndUpdate(
        req.params.id,
        req.body
    );

    res.status(200)
    .json({
        message:"Updated"
    });

}

exports.deleteBlog = async(req,res)=>{

    const blog =
    await blogModel.findById(
        req.params.id
    );

    if(

        blog.user.toString()

        !==

        req.session.userId

    ){

        return res.status(403)
        .json({
            message:"Access Denied"
        });

    }

    await blogModel.findByIdAndDelete(
        req.params.id
    );

    res.status(200)
    .json({
        message:"Deleted"
    });

}


