import { Router } from "express";

import { createCardController } from "../controllers/ creationController";


const creationRouter = Router();


creationRouter.post("/create-card", createCardController)



export default creationRouter;