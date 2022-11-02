"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unAuthenticated = exports.notFound = exports.badRequest = void 0;
const http_status_codes_1 = require("http-status-codes");
const badRequest = (res, message) => {
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        message,
    });
};
exports.badRequest = badRequest;
const notFound = (res, message) => {
    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
        message,
    });
};
exports.notFound = notFound;
const unAuthenticated = (res, message) => {
    return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
        message,
    });
};
exports.unAuthenticated = unAuthenticated;
