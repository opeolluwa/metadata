import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import expressEjsLayout from "express-ejs-layouts";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;

//register the static files path
app.use(express.json());
app.use(express.static("public"));
app.use(expressEjsLayout)
app.use('/stylesheets', express.static(path.join(__dirname, "public/stylesheets")));
app.use('/scripts', express.static(path.join(__dirname, "public/scripts")));
app.use('/icons', express.static(path.join(__dirname, "public/icons")));
app.use('/images', express.static(path.join(__dirname, "public/images")));
app.set('view engine', 'ejs');
// Register all app routes.
app.get('/', function (req: Request, res: Response) {
    res.render('index', { title: "Web games - collection of JavaScript Games" });
});

app.post('/auth/user/register', (req: Request, res: Response) => {
    console.log("registered")
})

app.get('/auth/user/register', (req: Request, res: Response) => {
    res.render('signup', { title: "create account" });
})

app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})






