"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const articleSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    lastModified: {
        type: Number,
        required: true
    }
}, { _id: false });
const Article = (0, mongoose_1.model)('article', articleSchema);
exports.default = Article;
