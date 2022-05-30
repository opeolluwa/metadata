//contact page form submission controller and view controller 
import { NextFunction, Request, Response } from "express"
import { mailer } from "./../lib/mailer";
import path from "path";
const ejs = require("ejs")

export class ContactFormController {
    /**
     * destructure @param {username, email, subject and message} from the payload
     * validate the payload, 
     * fetch the template and send it to admin
     * return status report to user 
     * end transaction
     */
    static async index(req: Request, res: Response) {
        ejs.renderFile(path.join(__dirname, "./../templates/contact-form.ejs"), { ...req.body }, function (err: any, template: any) {
            if (err) {
                console.log(err);
            }
            mailer({ email: process.env.SMTP_USERNAME, subject: "New Message from Meta User", template })
        });

    }
}

export class ContactFormViews {
    static async index(req: Request, res: Response) {
        res.render("pages/contact", { title: "Contact ", layout: "./layouts/base-layout", error: {}, value: {} });
    }
}