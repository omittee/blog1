"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_json_1 = __importDefault(require("koa-json"));
const koa_logger_1 = __importDefault(require("koa-logger"));
const koa_body_1 = __importStar(require("koa-body"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_history_api_fallback_1 = __importDefault(require("koa-history-api-fallback"));
const path_1 = __importDefault(require("path"));
const mongo_1 = require("./config/mongo");
// import auth from './server/routes/auth'
const api_1 = __importDefault(require("./routes/api"));
(0, mongo_1.connectDB)();
const app = new koa_1.default();
const r = new koa_router_1.default();
app.use((0, koa_json_1.default)());
app.use((0, koa_logger_1.default)());
app.use((0, koa_body_1.default)({
    // json:true,
    multipart: true,
    parsedMethods: [koa_body_1.HttpMethodEnum.POST, koa_body_1.HttpMethodEnum.PUT, koa_body_1.HttpMethodEnum.PATCH, koa_body_1.HttpMethodEnum.GET, koa_body_1.HttpMethodEnum.HEAD, koa_body_1.HttpMethodEnum.DELETE],
}));
app.use(async function (ctx, next) {
    try {
        await next();
    }
    catch (err) {
        if (err instanceof koa_1.default.HttpError) {
            console.log(ctx.header);
            if (err.status === 401) {
                ctx.status = 401;
                ctx.body = {
                    status: 401,
                    message: '请求未授权'
                };
            }
            else {
                throw err;
            }
        }
        else {
            throw err;
        }
    }
});
app.on('error', function (err) {
    console.log('server error', err);
});
r.use(api_1.default.routes());
app.use(r.routes());
app.use(r.allowedMethods());
app.use((0, koa_history_api_fallback_1.default)());
app.use((0, koa_static_1.default)(path_1.default.resolve('../../fe/build')));
app.listen(3060,'0.0.0.0', () => {
    console.log('Koa is listening in 3060');
});
exports.default = app;
