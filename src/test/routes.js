const {Router} = require("express");
const testRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { postTest, signUp, getAllUsers, login } = require("./controllers");
const { hashPass } = require("../middleware/auth");

testRouter.post("/postTest", isData, isLowerCase, postTest);

testRouter.post("/signUp", hashPass, signUp);

testRouter.get("/getAllUsers", getAllUsers);

testRouter.post("/login", login);

module.exports = testRouter;