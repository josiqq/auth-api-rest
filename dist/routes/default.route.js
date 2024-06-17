"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const default_controllet_1 = require("../controllers/default.controllet");
const router = (0, express_1.Router)();
router.get('/', default_controllet_1.defaultController);
exports.default = router;
