import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

//load in the client 
app.use(express.json());
app.use(express.static("public"));
app.use('/stylesheets', express.static(path.join(__dirname, "public/stylesheets")));
app.use('/scripts', express.static(path.join(__dirname, "public/scripts")));
app.use('/icons', express.static(path.join(__dirname, "public/icons")));
app.use('/images', express.static(path.join(__dirname, "public/images")));

app.set('view engine', 'ejs');

// index page
app.get('/', function (req, res) {
  res.render('index', { title: "Web games - collection of JavaScript Games" });
});

// about page
app.get('/about', function (req, res) {
  res.render('pages/about');
});


app.listen(port, () => {
  console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})