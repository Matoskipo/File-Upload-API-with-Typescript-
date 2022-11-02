"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadProductImage = exports.uploadProductImageLocal = void 0;
const path_1 = __importDefault(require("path"));
const helperMethods_1 = require("../utils/helperMethods");
const http_status_codes_1 = require("http-status-codes");
const cloudinary_1 = require("cloudinary");
const fs_1 = __importDefault(require("fs"));
const uploadProductImageLocal = async (req, res) => {
    // check if file exist
    const validFile = req.files;
    // console.log(validFile)
    if (!validFile) {
        return (0, helperMethods_1.badRequest)(res, 'No file uploaded');
    }
    // check format
    const productImage = req.files.image;
    if (!productImage.mimetype.startsWith('image')) {
        return (0, helperMethods_1.badRequest)(res, 'Please upload an image');
    }
    // check size
    const maxSImgSize = 1024 * 1024;
    if (productImage.size > maxSImgSize) {
        return (0, helperMethods_1.badRequest)(res, 'Please upload an image below 1kb');
    }
    const imagePath = path_1.default.join(__dirname, '../../public/uploads/' + `${productImage.name}`);
    await productImage.mv(imagePath);
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        image: { src: `/uploads/${productImage.name}` }
    });
};
exports.uploadProductImageLocal = uploadProductImageLocal;
const uploadProductImage = async (req, res) => {
    const result = await cloudinary_1.v2.uploader.upload(req.files.image.tempFilePath, {
        use_filename: true,
        folder: "file-upload"
    });
    fs_1.default.unlinkSync(req.files.image.tempFilePath);
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        image: { src: result.secure_url }
    });
};
exports.uploadProductImage = uploadProductImage;
