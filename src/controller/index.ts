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
        res.render("pages/authentication/forgotten-password", { title: "account recovery - confirm username and security answer", layout: "./layouts/user-authentication-layout", error: "" });
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
            { route: "gradient", anchor: "css gradient and patterns" },
            { route: "code-generator", anchor: " CSS Code Generator" },
            { route: "design-inspiration", anchor: "Design Inspiration" },
            { route: "icon", anchor: "Icon libraries" },
            { route: "image", anchor: "Images" },
            { route: "ui-libraries", anchor: " UI libraries" },
            { route: "svg", anchor: "svg illustrations,shapes and backgrounds" },
            { route: "hacks", anchor: "collection of Frontend and backend libraries, hosting platforms ..." },
        ]
        
        res.render("index", { title: "Collection of images, icons, code blocks and illustrations and morefor designers and developers ", layout: "./layouts/base-layout", categories });
    }

   

    static async termsOfUse(req: Request, res: Response) {
        res.render("terms-of-use", { title: "Legal | terms of use ", layout: "./layouts/base-layout", });

    }

    static async privacyPolicy(req: Request, res: Response) {
        res.render("privacy-policy", { title: "Legal | privacy policy ", layout: "./layouts/base-layout", });

    }

    static async cookiePolicy(req: Request, res: Response) {
        res.render("cookie-policy", { title: "Legal | cookie policy ", layout: "./layouts/base-layout", });

    }
}





