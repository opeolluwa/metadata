import { Application } from "express";
import AuthenticationControllers from "../controller/auth";

export default (app: Application) => {
    app.post("/v1/auth/signup", AuthenticationControllers.signup);
    app.post("/v1/auth/login", AuthenticationControllers.login);
    app.get("/v1/auth/verify-account", AuthenticationControllers.verifyAccount);

}