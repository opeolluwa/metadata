import { Request, Response } from "express";

export class AuthenticationViewsRenderer {
    //signup view engine
    static signUp(req: Request, res: Response) {
        res.render("pages/authentication/sign-up", { title: "create account", layout: "./layouts/user-authentication-layout", script: "sign-up" });
    }
    static login(req: Request, res: Response) {
        res.render("pages/authentication/login", { title: "login to dashboard", layout: "./layouts/user-authentication-layout" });
    }
    static passwordReset(req: Request, res: Response) {
        res.render("pages/authentication/forgotten-password", { title: "account recovery - confirm username and security answer", layout: "./layouts/user-authentication-layout" });
    }

    static setNewPassword(req: Request, res: Response) {
        res.render("pages/authentication/set-new-password", { title: "account recovery - set new password", layout: "./layouts/user-authentication-layout" });
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
        res.render("pages/resource/animation", { title: "animation", layout: "./layouts/resource-layout", content: "animation", pageTitle: "animation" });
    }

    static icons(req: Request, res: Response) {
        res.render("pages/resource/icons", { title: "meta data icons collection", layout: "./layouts/resource-layout", content: "icons", pageTitle: "icons" });
    }

    static illustrations(req: Request, res: Response) {
        res.render("pages/resource/illustrations", { title: "meta data illustrations collection", layout: "./layouts/resource-layout", content: "illustrations", pageTitle: "illustrations" });
    }

    static codeSnippets(req: Request, res: Response) {
        res.render("pages/resource/code-snippets", { title: "meta data code blocks collections", layout: "./layouts/resource-layout", content: "code blocks", pageTitle: "code snippets" });
    }


    static images(req: Request, res: Response) {
        res.render("pages/resource/images", { title: "meta data images collection", layout: "./layouts/resource-layout", content: "animation", pageTitle: "free and paid images" });
    }


    static svg(req: Request, res: Response) {
        res.render("pages/resource/svg", { title: "meta data svg generators", layout: "./layouts/resource-layout", content: "animation", pageTitle: "SVG shapes and background generators" });
    }
}



export class UserAccountContentRenderer {
    static dashboard(req: Request, res: Response) {
        //TODO:hh== get the current logged in user
        req.params.account ="drizzle"
        res.render("pages/account/dashboard", { title: "user account", layout: "./layouts/user-account-layout" });
    }
}