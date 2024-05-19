"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const Student = sequelize_2.sequelize.define("student", {
    gender: {
        type: sequelize_1.DataTypes.CHAR,
        allowNull: false,
    },
    group: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    list_number: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
exports.default = Student;
