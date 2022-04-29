import { Application } from "express";
import AuthenticationControllers from "../controller/auth";

export default (app: Application) => {
    app.post("/v1/auth/user?action=signup", AuthenticationControllers.signup);
    app.post("/v1/auth/user?action=login", AuthenticationControllers.login);
    app.get("/v1/auth/user?action=verify-account&token=:token", AuthenticationControllers.verifyAccount);

}