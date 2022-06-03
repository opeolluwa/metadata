import express from "express";
import { AuthenticationMiddleware } from "../middleware/auth";
import { UserAccountViews, } from "../controller/dashboard";
const router = express.Router()

//resister all resource route dynamically based on the router parameter
router.get("*", AuthenticationMiddleware.confirm, UserAccountViews.render)
export default router;