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
const student_model_1 = __importDefault(require("../models/student.model"));
const level1stat_model_1 = __importDefault(require("../models/level1stat.model"));
const level2stat_model_1 = __importDefault(require("../models/level2stat.model"));
const level3stat_model_1 = __importDefault(require("../models/level3stat.model"));
const router = express_1.default.Router();
router.post("/level1", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isCorrect, expectedShape, studentListNum, selectedShape, studentGroup, } = req.body;
    const student = yield student_model_1.default.findOne({
        where: { list_number: studentListNum, group: studentGroup },
    });
    if (!student)
        res.status(404).send(`Error, no student found with that list and group`);
    yield level1stat_model_1.default.create({
        is_correct: isCorrect,
        expected_shape: expectedShape,
        student_id: student.id,
        selected_shape: selectedShape,
    });
    res.send("level 1 stat created");
}));
router.get("/level1", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = req.query.list;
    const group = req.query.group;
    if (!list && !group) {
        const stats = yield level1stat_model_1.default.findAll();
        return res.send({ stats });
    }
    const student = yield student_model_1.default.findOne({
        where: { list_number: parseInt(list), group: group },
    });
    if (!student)
        return res.status(400).send("No student with that list number and group");
    let stats = yield level1stat_model_1.default.findAll({
        where: { student_id: student.id },
    });
    res.send({ stats });
}));
router.post("/level2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isCorrect, studentListNum, studentGroup, operationType, } = req.body;
    const student = yield student_model_1.default.findOne({
        where: { list_number: studentListNum, group: studentGroup },
    });
    if (!student)
        res.status(404).send(`Error, no student found with that list and group`);
    yield level2stat_model_1.default.create({
        is_correct: isCorrect,
        operation_type: operationType,
        student_id: student.id,
    });
    res.send("level 2 stat created");
}));
router.get("/level2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = req.query.list;
    const group = req.query.group;
    if (!list && !group) {
        const stats = yield level2stat_model_1.default.findAll();
        return res.send({ stats });
    }
    const student = yield student_model_1.default.findOne({
        where: { list_number: parseInt(list), group: group },
    });
    if (!student)
        return res.status(400).send("No student with that list number and group");
    let stats = yield level2stat_model_1.default.findAll({
        where: { student_id: student.id },
    });
    res.send({ stats });
}));
router.post("/level3", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { isCorrect, operationType, studentListNum, shapeType, studentGroup, } = req.body;
    const student = yield student_model_1.default.findOne({
        where: { list_number: studentListNum, group: studentGroup },
    });
    if (!student)
        res.status(404).send(`Error, no student found with that list and group`);
    yield level3stat_model_1.default.create({
        is_correct: isCorrect,
        operation_type: operationType,
        student_id: student.id,
        shape_type: shapeType,
    });
    res.send("level 3 stat created");
}));
router.get("/level3", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const list = req.query.list;
    const group = req.query.group;
    if (!list && !group) {
        const stats = yield level3stat_model_1.default.findAll();
        return res.send({ stats });
    }
    const student = yield student_model_1.default.findOne({
        where: { list_number: parseInt(list), group: group },
    });
    if (!student)
        return res.status(400).send("No student with that list number and group");
    let stats = yield level3stat_model_1.default.findAll({
        where: { student_id: student.id },
    });
    res.send({ stats });
}));
exports.default = router;
