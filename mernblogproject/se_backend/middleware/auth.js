const auth = (
 req,
 res,
 next
)=>{

 if(
   !req.session.userId
 ){

   return res.status(401)
   .json({
      message:
      "Login Required"
   });

 }

 next();

};

module.exports = auth;