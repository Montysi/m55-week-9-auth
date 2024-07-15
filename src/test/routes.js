const {Router} = require("express");
const testRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { postTest, addUser } = require("./controllers");

testRouter.post("/postTest", isData, isLowerCase, postTest);

testRouter.post("/addUser", isLowerCase, addUser);

module.exports = testRouter;