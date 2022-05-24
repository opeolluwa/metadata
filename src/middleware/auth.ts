import { Request, Response, NextFunction } from "express";
import { User } from "../models/User";

export class AuthenticationMiddleware {
  static async confirm(req: Request, res: Response, next: NextFunction) {
    if (!req.session.user) {
      /* return res.redirect("/login") */
      return res.render("pages/error/auth-required", { title: "authentication required", layout: "./layouts/user-authentication-layout", error: { authentication: "please login to view requested resource" }, value: {} });
    }

    /**
     * parse the username and user from session,
     * find user with the fetched username
     */
    const username = req.session.user.username;
    const user_id = req.session.user.user_id;
    const user = await User.findOne({ _id: user_id });
    req.params.username = username;
    next();
    return;
  }
}