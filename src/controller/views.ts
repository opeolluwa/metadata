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
            { route: "work-arounds", anchor: "collection of Frontend and backend libraries" },
            { route: "mobile-libraries", anchor: "Mobile application builders and compliers" },
            { route: "more", anchor: " more ..." },
        ]
        res.render("index", { title: "create account", layout: "./layouts/base-layout", categories });
    }
}



export class UserAccountContentRenderer {
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