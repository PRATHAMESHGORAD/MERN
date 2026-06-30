require("dotenv").config()
const Razorpay = require("razorpay")
const razorpay = new Razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
})

exports.createOrder = async(req,res)=>{
    try{
        const options = {
            amount: 49999,
            currency: "INR",
            receipt: "receipt_001"
        }

        const order = await razorpay.orders.create(options)
        res.status(200).json(order)
    }
    catch(error){
        console.log("Full Error",error);
        console.log("status:",error.statusCode);
        console.log("Description",error.error);
        console.log("Message",error.message);
        res.status(500).json({error})
        
    }
}