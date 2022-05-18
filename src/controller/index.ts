import { Request, Response } from "express";
import greeting from "../lib/greetings"

export class AuthenticationViewsRenderer {
    //signup view engine
    static signUp(req: Request, res: Response) {
        res.render("pages/authentication/sign-up", { title: "create account", layout: "./layouts/user-authentication-layout", error: {}, value: {} });
    }
    static login(req: Request, res: Response) {
        res.render("pages/authentication/login", { title: "login to dashboard", layout: "./layouts/user-authentication-layout", error: {}, value: {} });
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
        interface PageInterface {
            anchor: string,
            route: string
        }
        //fetch all existing category here then destructure in into the categories
        const categories: PageInterface[] = [
            { route: "animation", anchor: "Animation" },
            { route: "css-code-generator", anchor: " CSS Code Generator" },
            { route: "design-inspiration", anchor: "Design Inspiration" },
            { route: "icon-libraries", anchor: "Icon libraries" },
            { route: "images", anchor: "Images" },
            { route: "javascript-ui-libraries", anchor: "JavaScript UI libraries" },
            { route: "svg-illustrations-shapes-and-backgrounds", anchor: "svg illustrations,shapes and backgrounds" },
            { route: "ui-templates-and-patters", anchor: "UI templates &amp; patterns" },
            { route: "work-around", anchor: "collection of Frontend and backend libraries" },
            { route: "mobile-libraries", anchor: "Mobile application builders and compliers" },
            { route: "more", anchor: " more ..." },
        ]
        res.render("index", { title: "Collection of images, icons, code blocks and illustrations and morefor designers and developers ", layout: "./layouts/base-layout", categories });
    }
}





