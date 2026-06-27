
    const {Server} = require("socket.io");

let io;
const intializeSocket = (server) => {

    io = new Server(server,{
        cors:{
            origin:"http://localhost:5173",
            credentials: true
        }
    })

    io.on("connection", (socket) => {
        console.log("client connected");
        socket.on("joinRoom",(roomName)=>{
            socket.join(roomName);
            console.log(`${socket.id} joined ${roomName}`);
            
        })
        socket.on("joinBlog",(blogId)=>{

    socket.join(blogId);

    console.log(
        `${socket.id} joined blog ${blogId}`
    );

});
socket.on("leaveBlog",(blogId)=>{

    socket.leave(blogId);

    console.log(

        `${socket.id} left blog ${blogId}`

    );

});
        socket.on("leaveRoom",(room)=>{
            socket.leave(room);
            console.log(`${socket.id} left ${room}`);
            
        })
       

    })
}

const getIO = () =>{
    return io
}

module.exports = {intializeSocket,getIO}