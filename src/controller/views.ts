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
        res.render("index", { title: "create account", layout: "./layouts/base-layout" });
    }
}



export class UserAccountContentRenderer {
    static dashboard(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        return res.render("pages/account/dashboard", { title: "dashboard", layout: "./layouts/user-account-layout", values: { username, user_id, greeting: greeting.message } });
    }
}

/**
 * get the resource category requested from the router parameter
 * get query the database for the requested resource category
 * send the file to the view engine for rendering
 */

export class Resource {
    static getResourceCategory(req: Request, res: Response) {
        //get the resource type from the category
        const resourceCategory: string = req.params.category
        /**
         * check if category exists
         * fetch data from the store if it;s exists
         * else render 404 page
         */

        res.render("pages/resource", { title: resourceCategory, layout: "", content: "south carried circle row field north by hunter else return declared valuable express this volume attached various being straight station chose vapor measure observe", category: resourceCategory.replaceAll("-", " ") });
    }
}