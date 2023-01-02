import path from "path";
import { Sequelize, } from "sequelize";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, './../database/database.sqlite'),
    logging: false
});


export const dataSource = new DataSource({
    //the database driver see https://typeorm.io/#installation for other allowed values and setup
    type: "postgres",
    //the database host name, default to localhost
    host: String(process.env.DB_HOST) ? String(process.env.DB_HOST) : "localhost",
    //the database username
    username: process.env.DB_USER,
    //database password is the database access key
    password: process.env.DB_PASS,
    //database name
    database: process.env.DB_NAME,
    //path to database models
    entities: [path.join(__dirname, "../models/*.ts")],
    //path to migrations folder
    migrations: [path.join(__dirname, "../migrations/*.ts")],
    //define a table "database_migrations" to hold database migrations
    migrationsTableName: "database_migration",
    //use database synchronization only in development
    // synchronize: (process.env.NODE_ENV === "production") ? false : true,
    synchronize: false,
    ssl: String(process.env.DB_HOST) === "localhost" ? false : true,
    //allow logging in development only mode only
    logging: process.env.NODE_ENV === "production" ? false : true,
})

// export default dataSource
