"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const Level1Stat = sequelize_2.sequelize.define("level1_stat", {
    student_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    selected_shape: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    expected_shape: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    is_correct: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
});
exports.default = Level1Stat;
