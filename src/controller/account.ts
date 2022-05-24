import { NextFunction, Request, Response } from "express"
import { sequelize } from "../config/database.config";
import { User } from "../models/User";
import bcrypt from "bcrypt"
import greeting from "./../lib/greetings"

export class UserAccountViews {
    static dashboard(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }

    static home(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }

    static profile(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/profile", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }

    static activities(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/activities", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });

    }

    static bookmarks(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/bookmarks", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }

    static security(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/bookmarks", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }

    static settings(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;
        return res.render("pages/account/bookmarks", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }
}

