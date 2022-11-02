import express from'express';
import path from'path';
import connectDB from './config/config.db';
import productRouter from'./routes/products';
import fileUpload from 'express-fileupload'
import {v2 as cloudinary} from 'cloudinary'
const secret = process.env.MONGO_URI as string
// import cookieParser from'cookie-parser';
// import logger from'morgan';

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})


// database
connectDB()

var app = express();



// app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static( './public'));
app.use(fileUpload({useTempFiles:true}))

// product router
app.use('/api/v1/products', productRouter);
// app.use('/users', usersRouter);

export default app;
