import express from "express";
import { AuthenticationMiddleware } from "../middleware/auth";
import { Resource, UserAccountContentRenderer, } from "../controller/views";
const router = express.Router()
//resister all resource route dynamically based on the router parameter
router.get("/", AuthenticationMiddleware.confirmAuthenticationStatus, UserAccountContentRenderer.dashboard)
router.get("/profile", AuthenticationMiddleware.confirmAuthenticationStatus, UserAccountContentRenderer.profile)
router.get("/activities", AuthenticationMiddleware.confirmAuthenticationStatus, UserAccountContentRenderer.activities)
router.get("/bookmarks", AuthenticationMiddleware.confirmAuthenticationStatus, UserAccountContentRenderer.bookmarks)
router.get("/security", AuthenticationMiddleware.confirmAuthenticationStatus, UserAccountContentRenderer.security)
router.get("/settings", AuthenticationMiddleware.confirmAuthenticationStatus, UserAccountContentRenderer.settings)

export default router;