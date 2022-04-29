import { Application } from "express";
import AuthenticationRouters from "./auth"
export default (app: Application) => {
    AuthenticationRouters(app);
}