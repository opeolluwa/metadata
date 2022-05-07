import { Request, Response } from "express"
import { sequelize } from "../config/database.config";
import { User } from "../models/Users";
import bcrypt from "bcrypt"


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
            security_question: "",
            security_answer: "",
            privacy_policy_agreement: ""
        }

        //validate the data from the client
        const user = await User.findOne({ where: { username: req.body.username.trim() } });
        error.username = (!req.body.username) ? "username is required" :
            (user) ? "username already exist" : "";
        error.password = (!req.body.password || req.body.password.length < 8) ? "password must be at least 8 characters" : error.password;
        error.security_question = (!req.body.security_question) ? "security question is required" : error.security_question;
        error.security_answer = (!req.body.security_answer) ? "security answer is required" : error.security_answer;
        error.privacy_policy_agreement = (!req.body.privacy_policy_agreement) ? "privacy policy agreement is required" : error.privacy_policy_agreement;


        //get the payload from the request body and persist the values while checking for errors
        const { username, password, security_question, security_answer, privacy_policy_agreement } = req.body;
        const value = { username, password, security_question, security_answer, privacy_policy_agreement }


        //check for errors and send in error report if any
        if (!Object.values(error).every(e => e === "")) {
            return res.render("pages/authentication/sign-up-error", { title: "create account", layout: "./layouts/user-account-layout", error, value });
        }

        //else create the user
        else {
            try {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password.trim(), salt);
                const user = await User.create({ username: username.trim(), password: hash, security_question: security_question.trim(), security_answer: security_answer.trim(), privacy_policy_agreement: privacy_policy_agreement.trim() });
                //send in status report on completion
                return res.render("pages/authentication/sign-up-success", { title: "create account", layout: "./layouts/user-account-layout", username });
            } catch (error) {
            }
        }

    }



    static async login(req: Request, res: Response) {

    }


    static async verifyAccount(req: Request, res: Response) {

    }

}