import { Application } from "express";
import ResourceControllers from "../controller/resource";

export default (app: Application) => {
    app.get("/v1/resource/search?q=:query", ResourceControllers.search)
    app.post("/v1/resource/action?add-resource", ResourceControllers.addResource)
}