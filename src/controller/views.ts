import { Request, Response } from "express";

export class AuthenticationViewsRenderer {
    //signup view engine
    static signUp(req: Request, res: Response) {
        res.render("pages/authentication/sign-up", { title: "create account", layout: "./layouts/user-account-layout" });
    }
    static login(req: Request, res: Response) {
        res.render("pages/authentication/sign-in", { title: "login to dashboard", layout: "./layouts/user-account-layout" });
    }
    static passwordReset(req: Request, res: Response) {
        res.render("pages/authentication/forgotten-password", { title: "account recovery", layout: "./layouts/user-account-layout" });
    }
    static dashboard(req: Request, res: Response) {
        res.render("pages/authentication/authentication/sign-up", { title: "create account", layout: "./layouts/user-account-layout" });
    }
}


export class GeneralPagesViewsRenderer {
    static indexPage(req: Request, res: Response) {
        res.render("index", { title: "create account", layout: "./layouts/base-layout" });
    }
}


export class ContentCategoriesViewsRenderer {
    //fetch the content and pass it here
    static animation(req: Request, res: Response) {
        res.render("pages/resource/animation", { title: "animation", layout: "./layouts/resource-layout", content: "animation", pageTitle:"animation" });
    }
}