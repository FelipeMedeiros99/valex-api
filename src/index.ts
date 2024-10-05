import express, { Express, json } from "express";
import cors from "cors"
import router from "./routes/router";

const app:Express = express();
app.use(cors());
app.use(json());
app.use(router);

// comit test
// secound commit to teste2

app.listen(5000, ()=>console.log("servidor funcionando na porta 5000"));