"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("../models/article"));
const getArticle = async (ctx) => {
    // const { page, pageSize } = ctx.query;
    let page, pageSize;
    if (isNaN(+ctx.query.page))
        page = 0;
    else
        page = +ctx.query.page;
    if (isNaN(+ctx.query.pageSize))
        pageSize = 10;
    else
        pageSize = +ctx.query.pageSize;
    const regStr = (ctx.query.regStr ?? "");
    const result = await article_1.default.queryArticle(page, pageSize, regStr);
    ctx.body = result;
};
const getContentByID = async (ctx) => {
    const _id = ctx.query._id;
    const result = await article_1.default.queryContentByID(_id);
    if (result)
        ctx.body = {
            status: 200,
            msg: "获取内容成功！",
            data: result
        };
    else
        ctx.body = {
            status: 404,
            msg: "找不到相应内容",
        };
};
const getArticleNum = async (ctx) => {
    const regStr = (ctx.query.regStr ?? "");
    const result = await article_1.default.queryArticleNum(regStr);
    ctx.body = {
        status: 200,
        msg: "获取文章数成功",
        data: result
    };
};
const getTagsInfo = async (ctx) => {
    const result = await article_1.default.queryTagsInfo();
    ctx.body = {
        status: 200,
        msg: "获取tags成功",
        data: result
    };
};
const createOrUpdate = async (ctx) => {
    const data = ctx.request.body;
    console.log(data);
    const sign = await article_1.default.createOrUpdate(data);
    ctx.body = {
        status: 200,
        msg: sign ? "更新成功！" : "创建成功！"
    };
};
const deleteArticle = async (ctx) => {
    const data = ctx.query.id;
    const result = await article_1.default.deleteArticle(data);
    ctx.body = {
        status: result ? 200 : 404,
        msg: result ? "删除成功！" : "目标文章不存在！"
    };
};
exports.default = {
    getArticle,
    getContentByID,
    getArticleNum,
    getTagsInfo,
    createOrUpdate,
    deleteArticle
};
