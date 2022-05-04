import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import expressLayouts from "express-ejs-layouts";

import { sequelize } from "./config/database.config";
import { User } from "./models/Users";
sequelize.sync().then(() => {
    console.log("connected to database")
})

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
// app.set("layout", path.join(__dirname, "views", "layouts", "base-layout"))


// Register all app routes.
app.get("/", function (req: Request, res: Response) {
    res.render("index", { title: "Web games - collection of JavaScript Games" });
});
app.get("/register", (req: Request, res: Response) => {
    res.render("pages/sign-up", { title: "create account" });
})
app.get("/login", (req: Request, res: Response) => {
    res.render("pages/sign-in", { title: "create account" });
})


//register /auth/user/register
app.post("/auth/users/sign-up", async (req: Request, res: Response) => {
    const { username, password } = req.body;
    console.log(username, password)

    try {
        const user = await User.create({ username, password })
        return res.send({ username, password, user })

    } catch (error) {
        console.log(error)
    }



})//mount the page rendering to HTTP GET action


app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})






