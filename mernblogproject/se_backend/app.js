const express = require('express');
const cors = require('cors');
const session = require('express-session');

const { connectDB } = require('./db');

const blogRouter = require('./routes/blogroute');
const userRouter = require('./routes/userroute');

const app = express();

connectDB();

app.use(cors());
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

app.listen(2000, () => {
    console.log("running");
});