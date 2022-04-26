import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port= process.env.PORT;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello Africa")
})

app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})