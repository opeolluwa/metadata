import { Request, Response, NextFunction } from "express";
import { User } from "../models/Users";

export class AuthenticationMiddleware {
  static async confirmAuthenticationStatus(req: Request, res: Response, next: NextFunction) {
    if (!req.session.user) {
      /* return res.redirect("/login") */
      return res.render("pages/error/auth-required", { title: "authentication required", layout: "./layouts/user-authentication-layout", error: { authentication: "please login to view requested resource" }, value: {} });
    }
    const { user_id, username } = req.session.user;
    const user = await User.findOne({ where: { user_id: user_id } });
    req.params.username = username;
    next();
    return;
  }
}