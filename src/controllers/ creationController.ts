import { Request, Response } from "express";

export function createCardController(req: Request, res: Response){
    const { headers } = req;
    
    const xApikey =  headers["x-api-key"];   
    console.log(xApikey)
    res.status(200).send(req.headers);
    

}


