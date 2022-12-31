import { NextFunction, Request, Response } from "express"
import { User } from "../models/User";
import bcrypt from "bcrypt"
import { mailer } from "../lib/mailer";
import otpGenerator from "otp-generator"


const path = require("path");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");
export default class AuthenticationControllers {
    /**
       * @function signup - crate a new user account
       * @param {string} username the username of the user
       * @param {string} email the email of the user
       * @param {string} password the password of the user
       * @param {string} securityQuestion the security question of the user
       * @param {string} securityAnswer the security answer of the user
       * @returns error or success and render the returned value in a template
      */
    static async signup(req: Request, res: Response) {
        // destruct the payload 
        const {
            username,
            password,
            email,
            firstname,
            privacy_policy_agreement
        } = req.body;


        //construct the error messages beforehand
        const error = {
            username: "",
            password: "",
            email: "",
            firstname: "",
            // privacy_policy_agreement: ""
        }


        //validate the data from the client
        const emailExists = await User.findOne({ email: email.trim() });
        const usernameExists = await User.findOne({ username: username.trim() });
        if (!username) {
            error.username = "username is required";
        }
        if (!password) {
            error.password = "password is required";
        }
        if (!password && password.length < 8) {
            error.password = "password must be at least 8 characters";
        }
        if (emailExists) {
            error.email = "a user with the email already exists";
        }
        if (!firstname) {
            error.firstname = "firstname is required";
        }

        //check for errors and send in error report if any back to the user 
        const value = { username, password, email, firstname }
        if (!Object.values(error).every(e => e === "")) {
            return res.render("pages/authentication/sign-up", { title: "create account", layout: "./layouts/user-authentication-layout", error, value });
        }

        //if no error, create the user record 
        else {
            try {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password.trim(), salt);
                const user = new User({
                    username,
                    password: hash,
                    email,
                    firstname
                })
                await user.save();
                //set the magic link and activation token
                const activationToken = jwt.sign({ user_id: user._id.toString(), email: user.email, firstname: user.firstname }, process.env.JWT_SECRET, { expiresIn: "24h" });
                const magicLink = `${process.env.APP_URL}/activate/${activationToken}`;
                console.log(magicLink)
                //send the user notification to confirm account setup and redirect to login page on success
                ejs.renderFile(path.join(__dirname, "./../templates/verify.ejs"), { firstname: user.firstname, magicLink }, function (err: any, template: any) {
                    if (err) {
                        console.log(err);
                    }
                    //send the message
                    // console.log(template, magicLink)
                    mailer({ email: user.email, subject: "confirm email address", template })

                });
                //send in status report on completion
                return res.render("pages/authentication/sign-up-success", { title: "verify your account", layout: "./layouts/user-authentication-layout", firstname });
            } catch (error) {
                // to do handle error here
                console.log(error.message)
            }
        }

    }


    /**
        const isAuthenticated = await bcrypt.compare(password, user.password);
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

        const user = await User.findOne({ username: username.trim() });
        // handle unregistered user trying to login  
        if (!user) {
            return res.render("pages/authentication/login", { title: "login to your account", layout: "./layouts/user-authentication-layout", error: { authentication: "the account doesn't seem registered with us. \n Please recheck your username " }, value: { username, password } });
        }
        const isAuthenticated = await bcrypt.compare(password, user.password);
        // console.log(isAuthenticated, password, user.password)

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

        //redirect to dashboard and start a session
        if (isAuthenticated) {
            const username = user.username;
            const user_id = user._id.toString(); //parse user_id
            req.session.user = { username, user_id };
            return res.redirect("/d");
        }

    }


    static logOut(req: Request, res: Response) {
        req.session.destroy(() => {
            return res.redirect("/login")
        })
    }


    /**
     * 
     * 
     * to activate user account, get the magic link from the request params
     * decode the magic link,
     * the decode link contains {@param email} {@param user_id}
     * get the user with the decoded details and set the activated status in the user model to true
     * 
     * send a welcome user to the user afterwards
     * render a success page after sending the mail
     * 
     */
    static async activate(req: Request, res: Response) {
        const { token } = req.params;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { user_id, email, firstname } = decoded;
        // const user = await User.findOne({ _id: user_id });
        //TODO: check why fetch by user_id is not working
        const user = await User.findOne({ email });

        console.log(user_id);
        if (!user) {
            return res.render("pages/authentication/activation-failed", { title: "activation failed", layout: "./layouts/user-authentication-layout" });
        }
        else {
            try {
                await user.updateOne({ activated: true });
                ejs.renderFile(path.join(__dirname, "./../templates/welcome.ejs"), { firstname: user.firstname, }, function (err: any, template: any) {
                    if (err) {
                        console.log(err);
                    }
                    //send the message
                    mailer({ email: user.email, subject: "welcome to meta data", template })

                });
                return res.render("pages/authentication/activation-success", { title: "activation success", layout: "./layouts/user-authentication-layout", firstname });

            } catch (error) {
                return res.render("pages/authentication/activation-failed", { title: "activation failed", layout: "./layouts/user-authentication-layout" });
            }
        }
    }

    /**
     * 
     * Get the user email from request body
     * Check if user exists
     * 
     * If user exists, 
     *      - send otp to the user email
     *      - save the sent otp in a session
     *      - render a view asking user to confirm the sent opt
     * if user does not exist fire an error
     */
    static async passwordReset(req: Request, res: Response, next: NextFunction) {
        const { email } = req.body;
        const user = await User.findOne({ email })
        //fire an error if the mail is invalid 
        //TODO: check for email validity
        //TODO move the validation code block to validators
        if (!email) {
            return res.render("pages/authentication/forgotten-password", { title: "account recovery - confirm email", error: { email: "invalid email" }, layout: "./layouts/user-authentication-layout", });
        }
        if (!user) {
            return res.render("pages/error/reset-token", { title: "account recovery", email, layout: "./layouts/user-authentication-layout", });
        }
        /**
         * send the token to email
         * add user to session
         * render confirm token view
         */
        const otp = otpGenerator.generate(6, { specialChars: false });
        console.log(otp)
        await user.updateOne({ otp });
        ejs.renderFile(path.join(__dirname, "./../templates/reset.ejs"), {
            firstname: user.firstname, token: otp, BASE_URL: process.env.APP_URL
        }, function (err: any, template: any) {
            if (err) {
                console.log(err);
            }
            //send the message
            //TODO REVERt CHANGE BELOW
            mailer({ email: user.email, subject: "Password reset token", template })

        });

        //start a new session and save the user email to the session then prompt user to confirm otp
        req.session.accountRecovery = jwt.sign({ otp, email }, process.env.JWT_SECRET, { expiresIn: "24h" })
        return res.render("pages/authentication/confirm-otp", { title: "account recovery - confirm otp", layout: "./layouts/user-authentication-layout", error: "" });
        next()
    }


    /**
     * 
     * get the otp from the user, confirm the otp and allow user to set new password, 
     * do all of this using a session
     */
    static async confirmOtp(req: Request, res: Response) {
        const { otp } = req.body;
        const { accountRecovery } = req.session;
        console.log("in confirm");
        // return res.send({ error: false, message: "" })
        //decrypt the otp and compare
        //TODO: handle expired token and invalid token
        const decoded = jwt.verify(accountRecovery, process.env.JWT_SECRET);
        const { email } = decoded;
        const user = await User.findOne({ email })
        const oneTimePassword = await user.otp;

        if (otp.trim() !== oneTimePassword.trim()) {
            return res.send({ error: true, message: "invalid OTP" })
        }
        //if no error render set new password page
        return res.send({ error: false, message: "" })

    }

    /**
     * to set new password, 
     * get the user email from session
     * retrieve the user information
     * destructure the new password payload, validate it, encrypt and store
     */

    static async setNewPassword(req: Request, res: Response) {
        const { accountRecovery } = req.session;
        //decrypt the email from the session
        const decoded = jwt.verify(accountRecovery, process.env.JWT_SECRET);
        const { email } = decoded;
        console.log("in sett new")
        const user = await User.findOne({ email });
        if (!user) {
            return res.render("pages/authentication/forgotten-password", { title: "account recovery - confirm username and security answer", error: { email: "an unexpected error occurred. Please restart." }, layout: "./layouts/user-authentication-layout", });
        }

        //if user
        try {
            //TODO: move validation to validators
            //destructure password 
            console.log(req.body)
            const { password, confirmPassword } = req.body
            // console.log(password, confirmPassword)
            //TODO validate password
            const salt = bcrypt.genSaltSync(10);
            const newPassword = bcrypt.hashSync(password.trim(), salt);
            await user.updateOne({ password: newPassword });
            return res.render("pages/success/account-recovery-success", { title: "account recovery - confirm username and security answer", error: { email: "an unexpected error occurred. Please restart." }, layout: "./layouts/user-authentication-layout", });
        }
        catch (error: any) {
            console.log(error.message);
        }
    }
}