import { Router } from "express";

import creationRouter from "./creationRouter";


const router = Router();

router.use(creationRouter);

export default router;