"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_controller_1 = require("../controllers/task.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(task_controller_1.getTasks)
    .post(task_controller_1.createTask);
router.route('/:idTask')
    .get(task_controller_1.getTask)
    .put(task_controller_1.updateTask);
exports.default = router;
