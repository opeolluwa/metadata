import express from "express";
import { AuthenticationMiddleware } from "../middleware/auth";
import { UserAccountViews, } from "../controller/dashboard";
import Resource from "../controller/dashboard/resource";
const router = express.Router()

//resister all resource route dynamically based on the router parameter
router.get("/", /*AuthenticationMiddleware.confirm,*/ UserAccountViews.render)
router.get("/add-resource", /*AuthenticationMiddleware.confirm,*/ UserAccountViews.addResource)
router.post("/add-resource", Resource.addResource)
router.get("/profile", /*AuthenticationMiddleware.confirm,*/ UserAccountViews.profile)
router.get("/settings", /*AuthenticationMiddleware.confirm,*/ UserAccountViews.settings)
router.get("/notifications", /*AuthenticationMiddleware.confirm,*/ UserAccountViews.notifications)


export default router;