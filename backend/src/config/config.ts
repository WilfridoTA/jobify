import dotenv from "dotenv";

dotenv.config();

const WEBAPP_URL = process.env.WEBAPP_URL || "http://localhost:5173";
const APP_PORT = process.env.PORT || 3000;
const JWT_SECRET =
  process.env.JWT_SECRET || "sadfnjkds3213bfkjbdsk213124213jfb";

const MONGODB_HOST = process.env.MONGODB_HOST || "database";
const MONGODB_DATABASE = process.env.MONGODB_DATABASE || "db";
const MONGODB_USER = process.env.MONGODB_USER || "admin";
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD || "admin";
const MONGODB_PORT = parseInt(process.env.MONGODB_PORT as string) || 27017;

const MONGO_DB = {
  host: MONGODB_HOST,
  database: MONGODB_DATABASE,
  user: MONGODB_USER,
  password: MONGODB_PASSWORD,
  port: MONGODB_PORT,
};

const config = {
  mongodb: MONGO_DB,
  appPort: APP_PORT,
  jwtSecret: JWT_SECRET,
  webappUrl: WEBAPP_URL,
};

export default config;
