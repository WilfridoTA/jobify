import mongoose from "mongoose";
import config from "./config";

export async function connectMongoDB() {
  await mongoose.connect(
    `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}?authSource=admin`
  );
  console.log("Connected to DB");
}
