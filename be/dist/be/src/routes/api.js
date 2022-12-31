"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("../controllers/article"));
const login_1 = __importDefault(require("../controllers/login"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_jwt_1 = __importDefault(require("koa-jwt"));
const r = new koa_router_1.default();
r.get('/getArticle', article_1.default.getArticle)
    .get('/getContentByID', article_1.default.getContentByID)
    .get('/getArticleNum', article_1.default.getArticleNum)
    .get('/getTagsInfo', article_1.default.getTagsInfo)
    .post('/login', login_1.default)
    .use((0, koa_jwt_1.default)({ secret: process.env.JWT_SECRET_KEY }))
    .delete('/deleteArticle', article_1.default.deleteArticle)
    .post('/createOrUpdate', article_1.default.createOrUpdate);
exports.default = r;
