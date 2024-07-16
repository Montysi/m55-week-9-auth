const {Router} = require("express");
const testRouter = Router();

const { isData, isLowerCase } = require("../middleware/validation");
const { postTest } = require("./controllers");


testRouter.post("/postTest", isData, isLowerCase, postTest);

module.exports = testRouter;