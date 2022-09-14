import { NextFunction, Request, Response } from "express"
import { RESOURCE_CATEGORIES } from "../models/Resource";

export class UserAccountViews {
    static render(req: Request, res: Response) {
        const { username, user_id } = req.session.user;
        req.params.username = username;

        //the available category
        const categories = Object.values(RESOURCE_CATEGORIES)
        //render the view
        return res.render("pages/dashboard", {
            title: "Add Resource ", layout: "", error: {}, value: {}, username, categories, serverResponse: {
                message: "",
                isError: false
            }
        });
    }
}
