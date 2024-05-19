"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_model_1 = __importDefault(require("../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const verifyJWT_1 = require("../middleware/verifyJWT");
const router = express_1.default.Router();
router.put("/", verifyJWT_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { username, newData } = req.body;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.isAdmin) == false)
        return res.status(400).send("You need to be admin to acces this route");
    const user = yield user_model_1.default.findOne({
        where: { username: username },
    });
    if (!user) {
        return res.status(404).send(`No user found with username: ${username}`);
    }
    const data = newData;
    if (data.username) {
        user.username = data.username;
    }
    if (data.isAdmin) {
        user.is_admin = data.isAdmin;
    }
    if (data.password) {
        user.password = data.password;
    }
    yield user.save();
    res.send("User updated");
}));
router.post("/", verifyJWT_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if (((_b = req.user) === null || _b === void 0 ? void 0 : _b.isAdmin) == false)
        return res.status(400).send("You need to be admin to acces this route");
    const { isAdmin, password, username } = req.body;
    if (isAdmin == null || password == null || username == null)
        return res.status(400).send("Invalid request body");
    const foundUser = yield user_model_1.default.findOne({ where: { username: username } });
    if (foundUser != null)
        return res.status(400).send("User already exists");
    try {
        yield user_model_1.default.create({ is_admin: isAdmin, password, username });
        res.send("User created successfully");
    }
    catch (error) {
        res.status(500).send({ error });
    }
}));
router.delete("/", verifyJWT_1.verifyToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const foundUser = yield user_model_1.default.findOne({ where: { username: username } });
    if (foundUser == null) {
        res.status(400).send("User not found");
    }
    else {
        try {
            yield user_model_1.default.destroy({
                where: { username: username },
            });
            res.send("User deleted successfully");
        }
        catch (error) {
            res.status(500).send({ error });
        }
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, username } = req.body;
    // Find user by username
    const user = yield user_model_1.default.findOne({ where: { username, password } });
    if (!user) {
        return res.status(401).send("Invalid username or password");
    }
    const payload = {
        id: user.id,
        isAdmin: user.is_admin,
        username: user.username,
    };
    // Generate JWT token
    const token = jsonwebtoken_1.default.sign(payload, config_1.default.jwtSecret, {
        expiresIn: "1h",
    });
    res.json({ token });
}));
exports.default = router;
