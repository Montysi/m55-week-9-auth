const { Router } = require("express");
const userRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { signUp, getAllUsers, login, updateUserInformation } = require("./controllers");
const { hashPass, comparePass } = require("../middleware/auth");

userRouter.post("/signUp", hashPass, signUp);

userRouter.get("/getAllUsers", getAllUsers);

userRouter.post("/login", comparePass, login);

userRouter.put("/updateUserInformation/:username", updateUserInformation)

module.exports = userRouter;
