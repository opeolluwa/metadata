import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import { sequelize } from "./config/database";
import { User } from "./models/Users";
import { Resource } from "./models/Resource";


dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;


app.use(express.json());
app.use(express.static("public"));
app.use('/stylesheets', express.static(path.join(__dirname, "public/stylesheets")));
app.use('/scripts', express.static(path.join(__dirname, "public/scripts")));
app.use('/icons', express.static(path.join(__dirname, "public/icons")));
app.use('/images', express.static(path.join(__dirname, "public/images")));
app.set('view engine', 'ejs');



app.listen(port, () => {
  console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})

app.get('/', function (req, res) {
  res.render('index', { title: "Web games - collection of JavaScript Games" });
});




(async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database Connection has been successfully established.');

    await sequelize.sync();
    console.log("All models were synchronized successfully.");

  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

})()

