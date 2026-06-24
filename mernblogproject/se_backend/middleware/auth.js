
const jwt =
require(
 "jsonwebtoken"
);

const auth=(

 req,
 res,
 next

)=>{

 const token =

 req.headers.authorization
 ?.split(" ")[1];

 if(!token){

   return res.status(401);

 }

 try{

   const decoded =
   jwt.verify(

     token,

     "secret123"

   );

   req.user =
   decoded;

   next();

 }
 catch{

   return res.status(401);

 }

};

module.exports =
auth;

