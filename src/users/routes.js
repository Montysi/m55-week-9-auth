const { Router } = require("express");
const userRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { signUp, getAllUsers, login } = require("./controllers");
const { hashPass } = require("../middleware/auth");

userRouter.post("/signUp", hashPass, signUp);

userRouter.get("/getAllUsers", getAllUsers);

userRouter.post("/login", login);

module.exports = userRouter;
