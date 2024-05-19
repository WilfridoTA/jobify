"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const User = sequelize_2.sequelize.define("user", {
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    is_admin: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
});
exports.default = User;
