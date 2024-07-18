const { User, UserDatabase } = require("./model");

const jwt = require("jsonwebtoken");

// const signUp = async (req, res) => {
//   console.log("req: ", req.body);
//   try {
//     const user = await User.create(req.body);

//     res.status(201).json({ message: "success", username: user.username });
//   } catch (error) {
//     res.status(501).json({ message: error.message, error: error });
//   }
// };

const signUp = async (req, res) => {
  console.log("req: ", req.body);
  try {
    const user = await User.create(req.body);

    const userDatabase = await UserDatabase.create(req.body);

    res.status(201).json({ message: "success", username: user.username });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const login = async (req, res) => {
  try {

    const token = await jwt.sign({ id: req.user.id }, process.env.SECRET);

    const user = {
        id: req.user.id,
        username: req.user.username,
        token: token,
    }

    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({});

    res.status(200).json({ message: "success", users });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const updateUserInformation = async (req, res) => {
  try {

    const updateInformation = await User.update(
      req.body.updateFields,
      {
        where: {
          username: req.params.username,
        },
      }
    );
    res.status(200).json({ message: "Successfully updated user information"})
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const deleteUserByUsername = async (req, res) => {
  try {

    const username = req.body.username;

    const users = await User.destroy({ where: { username: username }});

    res.status(200).json({ message: `${username}'s account successfully deleted`, users: users })


    
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};



module.exports = {
  signUp: signUp,
  login: login,
  getAllUsers: getAllUsers,
  updateUserInformation: updateUserInformation,
  deleteUserByUsername: deleteUserByUsername,
};