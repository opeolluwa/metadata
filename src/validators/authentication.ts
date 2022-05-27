import { body, validationResult } from "express-validator";

export class AuthenticationValidators {
    static signup() {
        body("email").isEmail()
        body("password").isLength({ min: 8 })
    }
}