const userModel = require("../model/usermodel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashpassword = await bcryptjs.hash(password, 10);

        await userModel.create({
            name,
            email,
            password: hashpassword
        });
        

        res.status(201).json({
            message: "User Registered Successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Registration Failed"
        });
    }
};

// Login
exports.login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (
            user &&
            await bcryptjs.compare(password, user.password)
        ) {
        const token = jwt.sign(
    {
        id: user._id,
        role: user.role
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "1h"
    }
);

return res.status(200).json({
    message:"Login Successful",
    token: token
});}

        res.status(401).json({
            message: "Invalid Credentials"
        });

    } catch (error) {
        console.log(error);
    }
};

// Logout
exports.logout = (req, res) => {
    
        res.status(200).json({
            message: "Logout Successful"
        });
    
};