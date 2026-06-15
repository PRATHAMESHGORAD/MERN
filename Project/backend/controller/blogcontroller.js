const blogModel = require("../model/blogmodel");

const addblog = async(req,resp)=>{
    try {
        const {title,image,desp} = req.body;
        await blogModel.create({title,image,desp})
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const showblog = async(req,resp)=>{
    try {
        const data = await blogModel.findById(req.params.id)
        resp.render("show",{data})
    } catch (error) {
        console.log(error);
        
    }
}

const deleteblog = async (req,resp)=>{
    try {
        await blogModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const updateblog = async(req,resp)=>{
    try {
        await blogModel.findByIdAndUpdate(req.params.id,req.body)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const editformblog = async(req,resp)=>{
    try {
        const data = await blogModel.findById(req.params.id)
        resp.render("edit",{data})
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {addblog,showblog,deleteblog,updateblog,editformblog}