import { NextFunction, Request, Response } from "express"
import { RESOURCE_CATEGORIES } from "../../models/Resource";
import greeting from "../../lib/greetings";
export class UserAccountViews {
    static addResource(req: Request, res: Response) {
        return res.render("pages/dashboard/add-resource", {
            layout: "./layouts/dashboard-layout",
            title: "Add Resource"
        })
    }
    static profile(req: Request, res: Response) {
        return res.render("pages/dashboard/profile", {
            layout: "./layouts/dashboard-layout",
            title: "Profile " + "username"
        })
    }

    static settings(req: Request, res: Response) {
        return res.render("pages/dashboard/settings", {
            layout: "./layouts/dashboard-layout",
            title: "Account settings"
        })
    }

    static notifications(req: Request, res: Response) {
        return res.render("pages/dashboard/notifications", {
            layout: "./layouts/dashboard-layout",
            title: "Add Resource"
        })
    }
    static render(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;

        //the available category
        const categories = Object.values(RESOURCE_CATEGORIES)
        return res.render("pages/dashboard",
            {
                title: "Dashboard",
                layout: "./layouts/dashboard-layout",
                error: {},
                value: {},
                username,
                categories,
                greeting,
                serverResponse: {
                    message: "",
                    isError: false
                }
            });
    }
}
