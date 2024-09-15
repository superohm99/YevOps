const { loginUser ,registerUser, registerShop } = require('../service/auth');

const login = async (req,res) => {
    try {
        const user = await  loginUser(req.body);
        res.status(200).send(user.token);
    } catch (err) {
        if (err.message === "User not Found") {
            return res.status(404).send(err.message);
        }
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
}


const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        if (err.message === "All input is required") {
            return res.status(400).send(err.message);
        }
        if (err.message === "User already exists. Please login") {
            return res.status(409).send(err.message);
        }
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

<<<<<<< HEAD
module.exports = { login,register };
=======
const applyShop = async (req, res) => {
    try {
        const user = await registerShop(req.body);
        res.status(201).json(user);
    } catch (err) {
        if (err.message === "All input is required") {
            return res.status(400).send(err.message);
        }
        if (err.message === "This Email is already used" || err.message === "This ID card is already used" 
            || err.message === "This phone number is already used" || err.message === "This username is already used") {
            return res.status(409).send(err.message);
        }
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};


const logout = async (req, res) => {
    try {
        // Extract token from request headers or body
        const token = req.headers['x-access-token'] || req.body.token;

        if (!token) {
            return res.status(400).send("Token is required");
        }

        // Call the service method to handle token invalidation if needed
        // await logoutUser(token);

        // Send a success response
        res.status(200).send("Logged out successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};



module.exports = { login,register,applyShop,logout };
>>>>>>> origin/Ruth
