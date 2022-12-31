"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("../schema/article"));
const queryArticle = async (page, pageSize, regStr) => {
    const reg = new RegExp(regStr, "i");
    return await article_1.default.find({
        $or: [{
                title: reg
            }, {
                tags: reg
            }, {
                content: reg
            }],
    }).skip(page * pageSize).limit(pageSize).select({
        _id: 1,
        title: 1,
        tags: 1,
        abstract: 1,
        lastModified: 1,
    }).sort({
        lastModified: -1
    }).catch(e => console.log(e));
};
const queryContentByID = async (_id) => {
    return await article_1.default.findOne({
        _id
    }).select({
        _id: 1,
        title: 1,
        tags: 1,
        content: 1
    }).catch(e => console.log(e));
};
const queryArticleNum = async (regStr) => {
    const reg = new RegExp(regStr, "i");
    return await article_1.default.find({
        $or: [{
                title: reg
            }, {
                tags: reg
            }, {
                content: reg
            }],
    }).count().catch(e => console.log(e));
};
const queryTagsInfo = async () => {
    const tagMap = new Map();
    const data = await article_1.default.find({}).catch(e => console.log(e));
    if (data) {
        data.forEach(x => {
            x.tags.trim().split(" ").forEach(t => {
                tagMap.set(t, (tagMap.get(t) ?? 0) + 1);
            });
        });
    }
    return [...tagMap.entries()];
};
const createOrUpdate = async (info) => {
    return await article_1.default.findOne({ _id: info._id }).then((res) => {
        if (res) {
            article_1.default.updateOne({ _id: info._id }, info).catch(e => console.log(e));
            return 1;
        }
        else {
            new article_1.default(info).save((e) => {
                if (e)
                    console.log(e);
            });
            return 0;
        }
    }, (e) => console.log(e));
};
const deleteArticle = async (_id) => {
    const res = await article_1.default.findOne({ _id });
    if (!res)
        return false;
    article_1.default.deleteOne({ _id }).catch(e => console.log(e));
    return true;
};
exports.default = {
    queryArticle,
    queryContentByID,
    queryArticleNum,
    queryTagsInfo,
    createOrUpdate,
    deleteArticle,
};
