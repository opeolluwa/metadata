import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { databaseConnection } from "./config/database";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;

(async function () {
  app.use(express.json());
  app.use(express.static("public"));
  app.use('/stylesheets', express.static(path.join(__dirname, "public/stylesheets")));
  app.use('/scripts', express.static(path.join(__dirname, "public/scripts")));
  app.use('/icons', express.static(path.join(__dirname, "public/icons")));
  app.use('/images', express.static(path.join(__dirname, "public/images")));
  app.set('view engine', 'ejs');

  // index page
 
  await databaseConnection.sync({ force: true });
  console.log("All models were synchronized successfully.");

  app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
  })

  app.get('/', function (req, res) {
    res.render('index', { title: "Web games - collection of JavaScript Games" });
  });
})()