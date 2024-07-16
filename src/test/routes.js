const {Router} = require("express");
const testRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { postTest, signUp } = require("./controllers");

testRouter.post("/postTest", isData, isLowerCase, postTest);

testRouter.post("/signUpr", isLowerCase, signUp);

module.exports = testRouter;