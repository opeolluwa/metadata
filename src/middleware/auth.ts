import { Request, Response, NextFunction } from "express";
import { User } from "../models/Users";

export class AuthenticationMiddleware {
    static async confirmAuthenticationStatus(req: Request, res: Response, next: NextFunction) {
        // const { user_id, username } = req.session.user;
        if (!req.session.user) {
          return  res.redirect("/login")
        }
        const { user_id, username } = req.session.user;
        const user = await User.findOne({ where: { user_id: user_id } });
        req.user = user;
        next();
        return;
    }
}