const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    userEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, indexed: [{ unique: true, fields: ["username"] }] }
);

const UserDatabase = sequelize.define(
  "UserDatabase",
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    dateOfBirth: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    securityQuestionAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = User;
module.exports = UserDatabase;
