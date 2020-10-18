import { Request } from "express"

import { NextFunction, Request as ExpressRequest, Response } from 'express';
export const getRouteInformation = function(req:ExpressRequest,res:Response){
    res.status(200).json({success:true})
}