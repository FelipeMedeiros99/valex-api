    import { Request, Response, NextFunction } from "express";

    export default function errorControle(erro: Error, req:Request, res:Response, next: NextFunction){
        try{

        }catch(e){
            res.status(500).send("internal server error");
        }
    }
