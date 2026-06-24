const userModel = require("../model/usermodel");
const bcryptjs = require("bcryptjs");

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
        {
            req.session.userId =
   user._id;

   req.session.role =
   user.role;
        }

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
            return res.status(200).json({
                message: "Login Successful"
            });
        }

        res.status(401).json({
            message: "Invalid Credentials"
        });

    } catch (error) {
        console.log(error);
    }
};

// Logout
exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.status(200).json({
            message: "Logout Successful"
        });
    });
};