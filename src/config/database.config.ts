import path from "path";
import { Sequelize, } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, './../database/database.sqlite'),
    logging: false
});

