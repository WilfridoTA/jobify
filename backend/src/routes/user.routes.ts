import express from "express";
import jwt from "jsonwebtoken";

import config from "../config/config";
import {
  AuthenticatedRequest,
  TokenPayload,
  verifyToken,
} from "../middleware/verifyJWT";

const router = express.Router();

router.post("/login", async (req, res) => {
  // const { password, username }: ILoginRequest = req.body;
  // // Find user by username
  // const user = await User.findOne({ where: { username, password } });
  // if (!user) {
  //   return res.status(401).send("Invalid username or password");
  // }
  // const payload: TokenPayload = {
  //   id: (user as any).id,
  //   isAdmin: (user as any).is_admin,
  //   username: (user as any).username,
  // };
  // // Generate JWT token
  // const token = jwt.sign(payload, config.jwtSecret, {
  //   expiresIn: "1h",
  // });
  // res.json({ token });
});

export default router;
