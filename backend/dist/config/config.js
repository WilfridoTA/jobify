"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const WEBAPP_URL = process.env.WEBAPP_URL || "http://localhost:5173";
const APP_PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || "sadfnjkds3213bfkjbdsk213124213jfb";
const MYSQL_HOST = process.env.MYSQL_HOST || "database";
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || "db";
const MYSQL_USER = process.env.MYSQL_USER || "user";
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || "osomar";
const MYSQL_PORT = parseInt(process.env.MYSQL_PORT) || 3306;
const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    port: MYSQL_PORT,
};
const config = {
    mysql: MYSQL,
    port: APP_PORT,
    jwtSecret: JWT_SECRET,
    webappUrl: WEBAPP_URL,
};
exports.default = config;
