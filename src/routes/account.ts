import express from "express";
import { AuthenticationMiddleware } from "../middleware/auth";
import { UserAccountViews, } from "../controller/account";
const router = express.Router()

//resister all resource route dynamically based on the router parameter
router.get("/", AuthenticationMiddleware.confirm, UserAccountViews.dashboard)
router.get("/profile", AuthenticationMiddleware.confirm, UserAccountViews.profile)
router.get("/activities", AuthenticationMiddleware.confirm, UserAccountViews.activities)
router.get("/bookmarks", AuthenticationMiddleware.confirm, UserAccountViews.bookmarks)
router.get("/security", AuthenticationMiddleware.confirm, UserAccountViews.security)
router.get("/settings", AuthenticationMiddleware.confirm, UserAccountViews.settings)

export default router;