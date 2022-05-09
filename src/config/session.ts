import { sequelize } from "./database.config";

// load dependencies
var express = require("express");
var session = require("express-session");

// initalize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);


// configure express
var app = express();
app.use(
  session({
    secret: "keyboard cat",
    store: new SequelizeStore({
      db: sequelize,
    }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true, // if you do SSL outside of node.
  })
);
// co