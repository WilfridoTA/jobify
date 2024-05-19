"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = require("../config/sequelize");
const LevelScore = sequelize_2.sequelize.define("level_score", {
    student_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    level: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
});
exports.default = LevelScore;
