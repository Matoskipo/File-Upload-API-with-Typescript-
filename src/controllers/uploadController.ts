import {Request, Response} from 'express'
import path from 'path'
import {badRequest} from '../utils/helperMethods'
import {StatusCodes} from 'http-status-codes'
import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'



export const uploadProductImageLocal = async(req:Request|any, res:Response)=>{
    // check if file exist
    const validFile = req.files
    // console.log(validFile)
    if(!validFile){
        return badRequest(res,'No file uploaded')
    }
    // check format
 const productImage = req.files.image
 if(!productImage.mimetype.startsWith('image')){
    return badRequest(res,'Please upload an image')
 }
    // check size
 const maxSImgSize = 1024 * 1024
 if(productImage.size >maxSImgSize){
    return badRequest(res,'Please upload an image below 1kb')
 }

   
    const imagePath = path.join(__dirname,'../../public/uploads/' + `${productImage.name}`)
    await productImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({
        image: {src: `/uploads/${productImage.name}`}
    })
    
}
export const uploadProductImage = async(req:Request|any, res:Response)=>{
   const result = await cloudinary.uploader.upload(req.files.image.tempFilePath,{
    use_filename:true,
    folder: "file-upload"
   })
  fs.unlinkSync(req.files.image.tempFilePath)
   return res.status(StatusCodes.OK).json({
    image:{src: result.secure_url}
   })
   
}