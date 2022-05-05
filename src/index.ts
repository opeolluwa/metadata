import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import expressLayouts from "express-ejs-layouts";

import { sequelize } from "./config/database.config";
import AuthenticationControllers from "./controller/auth";
import { AuthenticationViewsRenderer, ContentCategoriesViewsRenderer, GeneralPagesViewsRenderer } from "./controller/views";


dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;

//register the static files path
app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts)
app.use("/stylesheets", express.static(path.join(__dirname, "./public/stylesheets")));
app.use("/scripts", express.static(path.join(__dirname, "./public/scripts/src")));
app.use("/icons", express.static(path.join(__dirname, "public/icons")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.set("layout", path.join(__dirname, "views", "layouts", "base-layout"))


// Register all app routes.
app.get("/", GeneralPagesViewsRenderer.indexPage);
app.get("/register", AuthenticationViewsRenderer.signUp)
app.get("/login", AuthenticationViewsRenderer.login)
app.get("/password-reset", AuthenticationViewsRenderer.passwordReset)

app.get("/animations", ContentCategoriesViewsRenderer.animation)

//register /auth/user/register
app.post("/auth/users/sign-up", AuthenticationControllers.signup)

//mount the page rendering to HTTP GET action

sequelize.sync().then(() => {
    console.log("connected to database")
})
app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})






