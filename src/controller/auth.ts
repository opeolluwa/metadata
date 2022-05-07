import { Request, Response } from "express"
import { sequelize } from "../config/database.config";
import { User } from "../models/Users";
import bcrypt from "bcrypt"



export default class AuthenticationControllers {
    static async signup(req: Request, res: Response) {
        const { username, password, security_question, security_answer, privacy_policy_agreement } = req.body;
        console.log({username, password, security_question, security_answer, privacy_policy_agreement})
        /*  try {
             // Store hash in your password DB.
             const salt = bcrypt.genSaltSync(10);
             const hash = bcrypt.hashSync(password, salt);
             const user = await User.create({ username, password: hash })
             return res.send({ username, password, user })
 
         } catch (error) {
             console.log(error)
         } */
    }



    static async login(req: Request, res: Response) {

    }


    static async verifyAccount(req: Request, res: Response) {

    }

}