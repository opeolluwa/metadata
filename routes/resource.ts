import { Application } from "express";
import ResourceControllers from "../controller/resource";

export default (app: Application) => {
    app.get("/v1/resource/search", ResourceControllers.search)
    app.get("/v1/resource/add", ResourceControllers.addResource)
}