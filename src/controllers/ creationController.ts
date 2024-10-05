import { Request, Response } from "express";

export function createCardController(req: Request, res: Response){
    const { headers } = req;
    
    const xApikey =  headers["x-api-key"];
    if(!xApikey){
        throw({
            error: "invalid api key in header",
            status: 401
        })
    }

    res.status(200).send(req.headers);
    

}


