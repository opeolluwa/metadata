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
        return res.sendFile(path.join(__dirname, "./../views/pages/account", "index.html"));
    }
}

