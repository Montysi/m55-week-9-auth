require("dotenv").config();
const express  = require("express");
const cors = require('cors');

const testRouter = require("./test/routes");
const userRouter = require("./users/routes");

const port = process.env.PORT || 5001;

const {User, UserDatabase } = require("./users/model");

const app = express()

app.use(express.json());
app.use(cors());

app.use("/test", testRouter);

app.use("/users", userRouter)

const syncTables = () => {
  User.hasOne(UserDatabase);
  UserDatabase.belongsTo(User);

  
  User.sync({});
  UserDatabase.sync({});


};

app.get("/health", (req, res) => {
    res.status(200).json({message: "API is healthy"})
});

app.listen(port, () => {
    syncTables();
    console.log(`Server is listening on port ${port}`);
});

// const syncTables = async () => {
//   try {
//     await sequelize.transaction(async (transaction) => {
//       User.hasOne(UserDatabase);
//       UserDatabase.belongsTo(User);

//       UserDatabase.sync({ transaction });
//       User.sync({ transaction });

//       console.log("Success");
//     });
//   } catch (err) {
//     console.error("Error", err);
//   }
// };