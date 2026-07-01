require("dotenv").config()
const Razorpay = require("razorpay")
const crypto = require("crypto")
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

exports.verifyPayment = (req,res)=>{
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    }= req.body
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECRET).update(body).digest("hex")
    if(expectedSignature === razorpay_signature){//createHmac : creates a secure signature
        return res.json({
            success: true,message: "payment verified"
        })
    }
    res.status(400).json({success: false,message: "invalid payment"})
}

exports