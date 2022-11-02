import {Request, Response} from 'express'
import Product from '../models/products'
import {StatusCodes} from 'http-status-codes'


export const createProduct = async(req:Request, res:Response)=>{
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({product})
}

export const getAllProducts =async(req:Request, res:Response)=>{
    const products = await Product.find({})
    return res.status(StatusCodes.OK).json({products})
}