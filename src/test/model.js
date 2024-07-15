const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const User = sequelize.define(
    "User",
    {
        userName: {
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
        }
    },
    { timestamps: false }
);

module.exports = User;