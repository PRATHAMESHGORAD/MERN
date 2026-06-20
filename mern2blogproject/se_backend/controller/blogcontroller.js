const blogModel = require("../model/blogmodel")


exports.addBlog = async(req,resp)=>{
    const new_blog = new blogModel(req.body)
    const result = await new_blog.save()
    resp.status(200).json(result)
}

exports.showblogs = async(req,resp)=>{
    const blogs = await blogModel.find()
    if ( blogs != null) {
        resp.status(200).json(blogs)
    } else {
        resp.status(404).json({message: 'not showed'})
    }
}

exports.showBlog = async(req,resp)=>{
    const blog = await blogModel.findById(req.params.id)
    if ( blog != null) {
        resp.status(200).json(blog)
    } else {
        resp.status(404).json({message: 'not showed'})
    }
}

exports.updateBlog = async(req,resp)=>{
    const blog = await blogModel.findByIdUpdate(req.params.id,req.body)
    if ( blog != null) {
        resp.status(200).json({message: ' updated'})
    } else {
        resp.status(404).json({message: 'not updated'})
    }
}

exports.deleteBlog = async(req,resp)=>{
    const blog = await blogModel.findByIdDelete(req.params.id)
    if ( blog != null) {
        resp.status(200).json({message: ' deleted'})
    } else {
        resp.status(404).json({message: 'not deleted'})
    }
}