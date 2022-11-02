"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productsController_1 = require("../controllers/productsController");
const uploadController_1 = require("../controllers/uploadController");
/* GET users listing. */
router.post('/', productsController_1.createProduct).get('/', productsController_1.getAllProducts);
router.post('/upload', uploadController_1.uploadProductImage);
exports.default = router;
