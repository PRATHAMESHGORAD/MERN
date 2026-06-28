const redis = require("redis");

const client = redis.createClient(6379,"127.0.0.1")
client.on("connect",()=>{
    console.log("redis connected");
    
})

client.on("error",(err)=>{
    console.log("redis error:", err);
    
})





module.exports = client