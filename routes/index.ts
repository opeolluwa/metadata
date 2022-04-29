import { Application } from "express";
import AuthenticationRoutes from "./auth"
import ResourceRoutes from "./auth"

export default (app: Application) => {
    AuthenticationRoutes(app);
    ResourceRoutes(app)
}