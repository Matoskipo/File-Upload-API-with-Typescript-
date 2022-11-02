"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    const dbUrl = process.env.MONGO_URI;
    try {
        await mongoose_1.default.connect(dbUrl);
        console.log('Database successfully connected');
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = connectDB;
