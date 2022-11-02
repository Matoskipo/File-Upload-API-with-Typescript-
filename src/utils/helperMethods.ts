import {Response} from 'express'
import {StatusCodes} from 'http-status-codes'

export const badRequest = (res:Response, message:string)=>{
    return res.status(StatusCodes.BAD_REQUEST).json({
        message,
    })
};

export const notFound =(res:Response, message:string)=>{
    return res.status(StatusCodes.NOT_FOUND).json({
        message,
    })
}
export const unAuthenticated =(res:Response, message:string)=>{
    return res.status(StatusCodes.UNAUTHORIZED).json({
        message,
    })
}