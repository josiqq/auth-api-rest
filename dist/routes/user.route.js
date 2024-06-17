"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.route('/')
    .get(user_controller_1.getUsers)
    .post(user_controller_1.createUser)
    .post(user_controller_1.loginUser);
router.route('/:idUser')
    .get(user_controller_1.getUser);
exports.default = router;
