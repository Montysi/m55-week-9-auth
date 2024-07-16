const {Router} = require("express");
const testRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { postTest, signUp } = require("./controllers");
const { hashPass } = require("../middleware/auth");

testRouter.post("/postTest", isData, isLowerCase, postTest);

testRouter.post("/signUp", hashPass, signUp);

module.exports = testRouter;