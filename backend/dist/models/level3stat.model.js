"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const Level3Stat = sequelize_2.sequelize.define("level3_stat", {
    student_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    operation_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    shape_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    is_correct: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
});
exports.default = Level3Stat;
