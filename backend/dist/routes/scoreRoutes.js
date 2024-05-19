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
const level_score_model_1 = __importDefault(require("../models/level_score.model"));
const student_model_1 = __importDefault(require("../models/student.model"));
const router = express_1.default.Router();
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { level, score, studentGroup, studentListNum } = req.body;
    const student = yield student_model_1.default.findOne({
        where: {
            list_number: studentListNum,
            group: studentGroup,
        },
    });
    if (!student)
        return res.status(400).send("No student with that list number and group");
    try {
        yield level_score_model_1.default.create({
            level: level,
            score: score,
            student_id: student.id,
        });
        res.send("Score created successfully");
    }
    catch (error) {
        res.status(500).send({ error });
    }
}));
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let level = req.query.level;
    if (!level) {
        const stats = yield level_score_model_1.default.findAll();
        return res.send({ stats });
    }
    else {
        try {
            const levelNumber = parseInt(level);
            const stats = yield level_score_model_1.default.findAll({
                where: { level: levelNumber },
            });
            return res.send({ stats });
        }
        catch (error) {
            return res.status(400).send("Level must be a number");
        }
    }
}));
exports.default = router;
