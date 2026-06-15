const bcryptjs = require('bcryptjs');
const userModel = require('../model/usermodel');
const blogModel = require('../model/blogmodel');

const register = async(req,resp)=>{
    try {
        const {uname,email,password} = req.body;
        const hashPassword = await bcryptjs.hash(password,10)
        await userModel.create({uname,email,password:hashPassword})
        resp.redirect("/login")
    } catch (error) {
        console.log(error);
        
    }
}

const login = async(req,resp)=>{
    try {
        const {uname,password} = req.body;
        const user = await userModel.findOne({uname})
        if (user && (await bcryptjs.compare(password,user.password))) {
            req.session.uname = uname;
            resp.redirect("/dashboard")
            
        } else {
            resp.redirect("/login")
        }
    } catch (error) {
        console.log(error);
        
    }
}

const dashboard = async(req,resp)=>{
    if (!req.session.uname) {
        resp.redirect("/login")
    } else {
        const blogs = await blogModel.find()
        resp.render("dashboard",{uname:req.session.uname,blogs})
    }
}

const logout = async(req,resp)=>{
    req.session.destroy(()=>{
        resp.redirect("/login")
    })
}

module.exports = {register,login,dashboard,logout}