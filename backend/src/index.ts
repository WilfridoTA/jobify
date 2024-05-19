import express, { Express, Request, Response } from "express";
import userRouter from "./routes/user.routes";
import testRouter from "./routes/test.routes";

import cors from "cors";
import { connectMongoDB } from "./config/mongodb";
import config from "./config/config";

const app: Express = express();

const corsOptions = {
  origin: [config.webappUrl, "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/user", userRouter);
app.use("/test", testRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Jobify API v1");
});

async function start() {
  try {
    await connectMongoDB();

    app.listen(config.appPort, () => {
      console.log(`[server]: Server is running at port:${config.appPort}`);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
