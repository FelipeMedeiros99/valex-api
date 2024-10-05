import { Request, Response, NextFunction } from "express";


// interfaces 
export interface MyError {
    error: string;
    status: number
}

// controllers 
export function handleErrorController(erro: MyError, req:Request, res:Response, next: NextFunction):void{
    try{
        res.status(erro.status).send(erro.error)
        return
    }catch(e){
        res.status(500).send("internal server error");
        return
    }
}
