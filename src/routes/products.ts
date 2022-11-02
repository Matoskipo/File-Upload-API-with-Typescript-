import express from 'express';
const router = express.Router();
import {createProduct,getAllProducts} from '../controllers/productsController'
import {uploadProductImage} from '../controllers/uploadController'

/* GET users listing. */
router.post('/',createProduct).get('/',getAllProducts)
router.post('/upload',uploadProductImage )

export default router;
