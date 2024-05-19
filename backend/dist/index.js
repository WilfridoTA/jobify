"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const statsRoutes_1 = __importDefault(require("./routes/statsRoutes"));
const scoreRoutes_1 = __importDefault(require("./routes/scoreRoutes"));
const cors_1 = __importDefault(require("cors"));
const sequelize_1 = require("./config/sequelize");
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: [config_1.default.webappUrl, "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use("/user", userRoutes_1.default);
app.use("/student", studentRoutes_1.default);
app.use("/stats", statsRoutes_1.default);
app.use("/scores", scoreRoutes_1.default);
(0, sequelize_1.initSequelize)();
app.get("/", (req, res) => {
    res.send("Geometric Farm API v1");
});
app.listen(config_1.default.port, () => {
    console.log(`[server]: Server is running at http://localhost:${config_1.default.port}`);
});
