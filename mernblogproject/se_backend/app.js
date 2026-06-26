const express = require('express');
const cors = require('cors');
const session = require('express-session');
const http = require('http');

const {intializeSocket} = require('./socket');





const { connectDB } = require('./db');

const blogRouter = require('./routes/blogroute');
const userRouter = require('./routes/userroute');

const app = express();

connectDB();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "blogapp",
    resave: false,
    saveUninitialized: false
}));

// User Routes
app.use('/user', userRouter);

// Blog Routes
app.use('/blog', blogRouter);


//create http server
const server = http.createServer(app);//it attaches to http server that is why we create



intializeSocket(server)
server.listen(2000, () => {
    console.log(" server running");
});