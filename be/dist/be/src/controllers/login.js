"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = require("jsonwebtoken");
exports.default = async (ctx) => {
    const { pwd } = ctx.request.body;
    if (!bcryptjs_1.default.compareSync(pwd, "$2a$10$zZEkgZgfhWZMQX8c0WF15uCmMy.9tXKoEHmlgZ3xMQmDeQWOOMAu6")) {
        ctx.body = {
            status: 403,
            msg: "密码错误",
        };
    }
    else {
        const token = (0, jsonwebtoken_1.sign)({ name: "Omittee" }, process.env.JWT_SECRET_KEY);
        ctx.body = {
            status: 200,
            token
        };
    }
};
