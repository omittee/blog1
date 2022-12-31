"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = require("mongoose");
function connectDB() {
    const url = 'mongodb://127.0.0.1:27017/blog1';
    (0, mongoose_1.connect)(url);
    return new Promise((resolve, reject) => {
        mongoose_1.connection.on('connected', () => {
            console.log('connect success');
            resolve();
        });
        mongoose_1.connection.on('error', (e) => {
            console.log('connect fail', e);
            reject();
        });
    });
}
exports.connectDB = connectDB;
