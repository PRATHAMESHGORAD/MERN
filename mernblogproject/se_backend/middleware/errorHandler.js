const errorHandler = (err,req,res,next)=>{
   let statusCode = err.statusCode || 500;
   let message = err.message || "internal server error"
   
   //invalid mongodb objectID
   if(err.name === "castError"){
        statusCode = 400;
        message = "invalid ID"
   }

   //duplicate key error 
   if (err.code === 11000){
    statusCode = 400;
    message ="duuplicate data"
   }

   //validation error
   if(err.name === "validationError"){
    statusCode = 400;
    message = Object.values(err.errors).map(item => item.message).join(", ")
   }

   res.status(statusCode).json({success: false,message})
}

module.exports = errorHandler