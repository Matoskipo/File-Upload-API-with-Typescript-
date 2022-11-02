"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.createProduct = void 0;
const products_1 = __importDefault(require("../models/products"));
const http_status_codes_1 = require("http-status-codes");
const createProduct = async (req, res) => {
    const product = await products_1.default.create(req.body);
    res.status(http_status_codes_1.StatusCodes.CREATED).json({ product });
};
exports.createProduct = createProduct;
const getAllProducts = async (req, res) => {
    const products = await products_1.default.find({});
    return res.status(http_status_codes_1.StatusCodes.OK).json({ products });
};
exports.getAllProducts = getAllProducts;
