"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSequelize = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("./config"));
exports.sequelize = new sequelize_1.Sequelize(config_1.default.mysql.database, config_1.default.mysql.user, config_1.default.mysql.password, {
    dialectModule: require("mysql2"),
    host: config_1.default.mysql.host,
    dialect: "mysql",
});
function initSequelize() {
    exports.sequelize
        .authenticate()
        .then(() => {
        console.log("Connection to mySQL db has been established successfully.");
        //sync models
        exports.sequelize
            .sync()
            .then((result) => {
            console.log("DB models synced");
        })
            .catch((err) => {
            console.log(err);
        });
    })
        .catch((error) => {
        console.error("Unable to connect to the database: ", error);
    });
}
exports.initSequelize = initSequelize;
