import { NextFunction, Request, Response } from "express"
import { sequelize } from "../config/database.config";
import { User } from "../models/User";
import bcrypt from "bcrypt"
import greeting from "../lib/greetings"

export class UserAccountViews {
    static render(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/", { title: "dashboard", layout: "./layouts/blank", values: { username, user_id, greeting: greeting.message } });
    }
}

