
import * as EmailValidator from 'email-validator';
import { Response, Request, NextFunction } from "express";
interface Error {
    firstname: string,
    email: string,
    message: string,
    subject: string
}

export function validateContactForm(req: Request, res: Response, next: NextFunction) {
    //destructure all values from the user 
    const { firstname, email, message, subject } = req.body
    let error: Error = {
        firstname: "",
        email: "",
        subject: "",
        message: ""
    }

    if (!firstname) {
        error.firstname = "Firstname is required"
    }
    if (!email || !EmailValidator.validate(email)) {
        error.email = "Email is required"
    }

    if (!subject) {
        error.subject = "Subject is required"
    }

    if (subject.length <= 10) {
        error.subject = "Please provide a more descriptive subject"
    }

    if (!message) {
        error.message = "message may not be empty"
    }

    if (message.length <= 10) {
        error.message = "Please provide more information"
    }

    //check for errors and send in error report if any
    if (!Object.values(error).every(e => e === "")) {
        return res.render("pages/contact", { title: "error sending message", layout: "./layouts/base-layout", error, value: { firstname, email, message, subject } });
        return;
    }

    next()
}
