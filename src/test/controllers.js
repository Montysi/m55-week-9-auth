const User = require("./model");

const postTest = async (req, res) => {
    console.log("postTest controller hit and username: ", req.body.username);
    try {
        res.status(201).json({ message: "success", body: req.body });
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};

const signUp = async (req, res) => {
    console.log("req: ", req.body);
    try {

        const user = await User.create(req.body);

        res.status(201).json({ message: "success", username: user.userName });
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
  
    }
};

const login = async (req, res) => {
    try {
        res.status(201).json({ message: "success", user: req.body })
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
}

const updatePassword = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};

const updateUsername = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};

const changeEmail = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
    }
};

module.exports = {
    postTest: postTest,
    signUp: signUp,
}