import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import expressLayouts from "express-ejs-layouts";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;

//register the static files path
app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts)
app.use("/stylesheets", express.static(path.join(__dirname, "./public/stylesheets")));
app.use("/scripts", express.static(path.join(__dirname, "./public/scripts")));
app.use("/icons", express.static(path.join(__dirname, "public/icons")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.set("layout", path.join(__dirname, "views", "layouts", "base-layout"))


// Register all app routes.
app.get("/", function (req: Request, res: Response) {
    res.render("index", { title: "Web games - collection of JavaScript Games" });
});

//register /auth/user/register
app.post("/", (req: Request, res: Response) => {
    console.log("registered")
})//mount the page rendering to HTTP GET action
    .get("/register", (req: Request, res: Response) => {
    res.render("pages/sign-up", { title: "create account", layout:"layouts/base-layout" });
})

app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})






