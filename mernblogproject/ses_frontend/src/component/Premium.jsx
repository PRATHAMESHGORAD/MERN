import React from 'react'
import axios from 'axios'
const Premium = () => {
    const handlePayment = async()=>{
    try{
        const {data } = await axios.post("http://localhost:2000/payment/create-order")
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount : data.amount,
            currency: data.currency,
            name:"MERN Blog",
            description: "PREMIUM MEMBERSHIP",
            order_id : data.id,
            handler: function(response){
                const result = await axios.post("http://localhost:2000/payment/verify-payment",response)
                console.log(result.data);
                
            },
            theme:{
                color: "#3399cc"
            }
        }
        const razorpay = new window.Razorpay(options)
        razorpay.open()
        
    }catch(error){
        console.log(error);
        
    }
}
  return (
    <>
    <div
        className="container mt-5"
    >
       <button
        
        className="btn btn-success"
        onClick={handlePayment}
       >
    buy premium $499
       </button>
       
    </div>
    
    </>
  )
}

export default Premium
