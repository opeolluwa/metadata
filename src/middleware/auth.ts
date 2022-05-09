import { Request, Response, NextFunction } from "express";


export class AuthenticationMiddleware {
    static confirmAuthenticationStatus(req: Request, res: Response, next: NextFunction) {
        if (req.session) {
            next()
        }
        else {
            return res.render("pages/authentication/login-errors", { title: "login to your account", layout: "./layouts/user-authentication-layout", error: { authentication: "your are not authorized to view the requested resource " + "\n" + "Please login to proceed" }, value: { username, password } });
        }
    }
}