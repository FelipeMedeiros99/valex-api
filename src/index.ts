import express, { Express, json } from "express";
import cors from "cors"
import router from "./routes/router";
import errorControle from "./controllers/errorControler";
import dotenv from "dotenv";

dotenv.config()

const PORT: number = parseInt(process.env.PORT || "5000")

const app:Express = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorControle);

app.listen(PORT, ()=>console.log(`server running`));