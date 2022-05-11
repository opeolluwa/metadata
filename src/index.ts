import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import { sequelize } from "./config/database.config";
import { User } from "./models/Users";
import router from "./routes";
import resource from "./routes/resource"
import userAccount from "./routes/account";
import sessionStore from "connect-session-sequelize";
import session, { Session } from 'express-session';
declare module 'express-session' { interface Session { user: User; } }



//global middleware
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 8000;
const SequelizeStore = sessionStore(session.Store);
const store = new SequelizeStore({
    db: sequelize,
});


//register the static files path
app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/stylesheets", express.static(path.join(__dirname, "./public/stylesheets")));
app.use("/scripts", express.static(path.join(__dirname, "./public/scripts/src")));
app.use("/icons", express.static(path.join(__dirname, "public/icons")));
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.set("layout", path.join(__dirname, "views", "layouts", "base-layout"))

//session initialization
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { secure: false, httpOnly: false, maxAge: (24 * 60 * 60 * 1000) }
}))
store.sync();


// Register all  routes
app.use(router)
app.use("/r", resource)
app.use("/u/", userAccount)




sequelize.sync().then(() => {
    console.log("connected to database")
})
app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})






