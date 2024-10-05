import express, { Express, json } from "express";
import cors from "cors"
import router from "./routes/router";
// import errorControler from "./controllers/errorControler";
import dotenv from "dotenv";
import { handleErrorController } from "./controllers/handleErrorControler";

dotenv.config()

const PORT: number = parseInt(process.env.PORT || "5000")

const app:Express = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(handleErrorController);
// app.use(errorControler);

app.listen(PORT, ()=>console.log(`server running`));