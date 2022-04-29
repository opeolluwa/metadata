import { Request, Response } from "express"
import { User } from "../models/Users";

export default class AuthenticationControllers {
    static async signup(req: Request, res: Response) {
        const { first_name, last_name, password, email, username } = req.body;
        try {
            const user = await User.create({ first_name, last_name, email, username, password });
            user.save()
        } catch (error) {
            console.log(error.message)
        }
    }



    static async login(req: Request, res: Response) {

    }


    static async verifyAccount(req: Request, res: Response) {

    }

}