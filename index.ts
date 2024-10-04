import express, { Express } from "express";
import cors from "cors"

const app:Express = express();
app.use(cors());

app.listen(5000, ()=>console.log("servidor funcionando na porta 5000"));