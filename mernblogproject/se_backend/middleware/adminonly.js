const adminonly =(req,resp,next)=>{
    if(req.session.role != "admin"){
        return resp.status(403).json({message: "Admin only"})
    }
    next();
}

module.exports = adminonly;