"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_db_1 = __importDefault(require("./config/config.db"));
const products_1 = __importDefault(require("./routes/products"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const cloudinary_1 = require("cloudinary");
const secret = process.env.MONGO_URI;
// import cookieParser from'cookie-parser';
// import logger from'morgan';
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});
// database
(0, config_db_1.default)();
var app = (0, express_1.default)();
// app.use(logger('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express_1.default.static('./public'));
app.use((0, express_fileupload_1.default)({ useTempFiles: true }));
// product router
app.use('/api/v1/products', products_1.default);
// app.use('/users', usersRouter);
exports.default = app;
