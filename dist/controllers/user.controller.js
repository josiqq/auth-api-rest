"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value)); 
            } catch (e) {
                reject(e); 
            } 
        }
        function rejected(value) { 
            try { 
                step(generator["throw"](value)); 
            } catch (e) { 
                reject(e); 
            } 
        }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const database_1 = require("../db/database");
const bcrypt_1 = __importDefault(require("bcrypt"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const users = yield conn.query('SELECT * FROM usuarios');
            return res.json(users[0]);
        }
        catch (e) {
            console.log(e);
        }
    });
}
exports.getUsers = getUsers;
function getUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.idUser;
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        res.json(posts[0]);
    });
}
exports.getUser = getUser;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = req.body;
        const conn = yield (0, database_1.connect)();
        // hash password
        const hashedPassword = yield bcrypt_1.default.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        yield conn.query('INSERT INTO usuarios SET ?', newUser);
        return res.json({
            message: 'Usuario creado correctamente'
        });
    });
}
exports.createUser = createUser;
function loginUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        res.json({
            message: 'Login'
        });
    });
}
exports.loginUser = loginUser;
