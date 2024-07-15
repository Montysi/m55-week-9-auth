const User = require("./model");

const postTest = async (req, res) => {
    console.log("postTest controller hit and username: ", req.body.username);
    try {
        res.status(201).json({ message: "success", body: req.body });
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};

const addUser = async (req, res) => {
    console.log("req: ", req.body);
    try {

        const user = await User.create(req.body);

        res.status(201).json({ message: "success", user: user });
    } catch (error) {
        res.status(501).json({ message: error.message, error: error });
  
    }
}

module.exports = {
    postTest: postTest,
    addUser: addUser,
}