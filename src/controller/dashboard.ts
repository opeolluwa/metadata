import { NextFunction, Request, Response } from "express"
import { sequelize } from "../config/database.config";
import { User } from "../models/User";
import bcrypt from "bcrypt"
import greeting from "../lib/greetings"
import path from "path";

export class UserAccountViews {
    static render(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;

        //the available category
        const categories = ["animation", "gradient", "css code generator", "design inspiration", "icon libraries", "image", "javascript Ui Library", "svg", "illustration", "workaround"];

        //render the view
        return res.render("pages/dashboard", { title: "Add Resource ", layout: "", error: {}, value: {}, username, categories });
    }
}
