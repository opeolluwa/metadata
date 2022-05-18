import { NextFunction, Request, Response } from "express"
import { sequelize } from "../config/database.config";
import { User } from "../models/Users";
import bcrypt from "bcrypt"
import { mailer } from "../lib/mailer";

const path = require("path");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");
export default class AuthenticationControllers {
    static async signup(req: Request, res: Response) {
        /**
         * @param {string} username the username of the user
         * @param {string} email the email of the user
         * @param {string} password the password of the user
         * @param {string} securityQuestion the security question of the user
         * @param {string} securityAnswer the security answer of the user
        */

        //prepare error messages beforehand
        const error = {
            username: "",
            password: "",
            email: "",
            firstname: "",
            privacy_policy_agreement: ""
        }

        console.log(req.body)
        // return;
        //validate the data from the client
        const emailExists = await User.findOne({ where: { email: req.body.email.trim() } });
        const usernameExists = await User.findOne({ where: { username: req.body.username.trim() } });

        error.username = (!req.body.username) ? "username is required" :
            (usernameExists) ? "username already exist" : "";
        error.password = (!req.body.password || req.body.password.length < 8) ? "password must be at least 8 characters" : error.password;
        error.email = (!req.body.email) ? "email is required" : (emailExists) ? "a user with the email already exists" : error.email;
        error.firstname = (!req.body.firstname) ? "firstname is required" : error.firstname;
        error.privacy_policy_agreement = (!req.body.privacy_policy_agreement) ? "privacy policy agreement is required" : error.privacy_policy_agreement;


        //get the payload from the request body and persist the values while checking for errors
        const { username, password, email, firstname, privacy_policy_agreement } = req.body;
        const value = { username, password, email, firstname }

        //check for errors and send in error report if any
        if (!Object.values(error).every(e => e === "")) {
            return res.render("pages/authentication/sign-up", { title: "create account", layout: "./layouts/user-authentication-layout", error, value });
        }

        //else create the user
        else {
            try {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password.trim(), salt);
                const user = await User.create({ username: username.trim(), password: hash, email: email.trim(), firstname: firstname.trim(), privacy_policy_agreement: privacy_policy_agreement.trim() });


                //set the magic link and activation token
                const activationToken = jwt.sign({ user_id: user.user_id, email: user.email, firstname: user.firstname }, process.env.JWT_SECRET, { expiresIn: "24h" });
                const magicLink = `${process.env.APP_URL}/activate/${activationToken}`;
                console.log(magicLink)
                //send the user notification to confirm account setup and redirect to login page on success
                ejs.renderFile(path.join(__dirname, "./../templates/welcome.ejs"), { firstname: user.firstname, magicLink }, function (err: any, template: any) {
                    if (err) {
                        console.log(err);
                    }
                    //send the message
                    console.log(template, magicLink)
                    mailer({ email: user.email, subject: "welcome to meta data", template })

                });
                //send in status report on completion
                return res.render("pages/authentication/sign-up-success", { title: "verify your account", layout: "./layouts/user-authentication-layout", firstname });
            } catch (error) {
                console.log(error.message)
            }
        }

    }


    /**
     * 
     * @param req {@param username} {@param password}
     * @param res 
     * @param next 
     * @returns 
     */
    static async login(req: Request, res: Response, next: NextFunction) {
        const { username, password } = req.body
        interface Error {
            username: string,
            password: string,
            authentication: string
        }

        const error: Error = {
            username: "",
            password: "",
            authentication: ""
        }
        const user = await User.findOne({ where: { username: username.trim() } });
        const isAuthenticated = await bcrypt.compare(password, user.password);


        /*  console.log(password, isAuthenticated) */
        if (!username) { error.username = "Username is required" }
        if (!password) { error.password = "password is required" }
        if (!user) { error.authentication = "invalid username or password" }
        if (!isAuthenticated) { error.authentication = "invalid username or password" }
        //check for errors and send in error report if any
        if (!Object.values(error).every(e => e === "")) {
            return res.render("pages/authentication/login", { title: "login to your account", layout: "./layouts/user-authentication-layout", error, value: { username, password } });
        }

        if (!user.activated) {
            return res.render("pages/authentication/login", { title: "login to your account", layout: "./layouts/user-authentication-layout", error: { authentication: "your account has not been verified" }, value: { username, password } });
        }

        //redirect to dashboard
        if (isAuthenticated) {
            const { username, user_id } = user
            req.session.user = { username, user_id };
            return res.redirect("/u/");
        }

    }


    static logOut(req: Request, res: Response) {
        req.session.destroy(() => {
            return res.redirect("/login")
        })
    }


    //confirm user account
    static async activate(req: Request, res: Response) {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { user_id, email, firstname } = decoded;
        const user = await User.findOne({ where: { user_id } });
        if (!user) {
            return res.render("pages/authentication/activation-failed", { title: "activation failed", layout: "./layouts/user-authentication-layout" });
        }
        else {
            try {
                await user.update({ activated: true });
                return res.render("pages/authentication/activation-success", { title: "activation success", layout: "./layouts/user-authentication-layout", firstname });
            } catch (error) {
                return res.render("pages/authentication/activation-failed", { title: "activation failed", layout: "./layouts/user-authentication-layout" });
            }
        }
    }
}