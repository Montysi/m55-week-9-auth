require("dotenv").config();
const express  = require("express");

const testRouter = require("./test/routes");

const port = process.env.PORT || 5001;

const User = require("./test/model");

const app = express()

app.use(express.json());

app.use("/test", testRouter);

const syncTables = () => {
    User.sync({});
}

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"})
});

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
});