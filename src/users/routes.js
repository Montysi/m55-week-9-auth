const { Router } = require("express");
const userRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { signUp, getAllUsers, login, updateUserInformation, deleteUserByUsername } = require("./controllers");
const { hashPass, comparePass, verifyToken } = require("../middleware/auth");

userRouter.post("/signUp", hashPass, signUp);

userRouter.get("/getAllUsers", verifyToken, getAllUsers);

userRouter.post("/login", comparePass, login);

userRouter.put("/updateUserInformation/:username", updateUserInformation)

userRouter.delete("/deleteUserByUsername", deleteUserByUsername)

userRouter.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

module.exports = userRouter;
