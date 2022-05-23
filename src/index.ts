//dependencies
import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import path from "path";
import expressLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";
import { sequelize } from "./config/database.config";
import { User } from "./models/Users";
//routes
import router from "./routes";
import resource from "./routes/resource"
import account from "./routes/account";
import search from "./routes/search"
import explore from "./routes/explore"
//session
import sessionStore from "connect-session-sequelize";
import session, { Session } from 'express-session';
declare module 'express-session' { interface Session { user: User; } }

//global middleware
dotenv.config();
const app: Express = express();
const ejs = require("ejs")
const port = process.env.PORT || 8000;
const SequelizeStore = sessionStore(session.Store);
export const mongoose = require('mongoose');
const store = new SequelizeStore({
    db: sequelize,
});

//register the static files path
app.use(express.json());
app.use(express.static("public"));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/stylesheets", express.static(path.join(__dirname, "./public/stylesheets")));
app.use("/scripts", express.static(path.join(__dirname, "./public/scripts/")));
app.use("/icons", express.static(path.join(__dirname, "public/icons")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))
app.set("layout", path.join(__dirname, "views", "layouts", "base-layout"));
app.set("/templates", path.join(__dirname, "templates"))

//session initialization
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: { secure: false, httpOnly: false, maxAge: (24 * 60 * 60 * 1000) }
}))
//session synchronization
store.sync();


mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true }, (err: string) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: ' + err)
    }
});



//mount   routes
app.use(router)
app.use("/r", resource)
app.use("/u/", account)
app.use("/search", search)
app.use("/explore", explore)

/*
*add 404 error page to the application
* to consume invalid url instead of firing application error
*/
app.use((req: Request, res: Response) => {
    res.status(404).render("pages/error/404", { title: "Page not found" })
})

//synchronize database
sequelize.sync().then(() => {
    console.log("connected to database")
})



//mount application
app.listen(port, () => {
    console.log(`⚡️ignition started on http://127.0.0.1:${port}`)
})






