import express from "express";
import AuthenticationControllers from "../controller/auth";
import { AuthenticationViewsRenderer, GeneralPagesViewsRenderer } from "../controller/";
import { UserAccountViews } from "./../controller/account"
import "../config/passport.config"
import passport from "passport";
import { AuthenticationMiddleware } from "../middleware/auth";
const router = express.Router()


router.get("/", GeneralPagesViewsRenderer.indexPage);
router.get("/register", AuthenticationViewsRenderer.signUp)
router.post("/register", AuthenticationControllers.signup)
router.get("/login",
    AuthenticationViewsRenderer.login,
    UserAccountViews.dashboard)
router.post("/login", AuthenticationControllers.login)
router.get("/password-reset", AuthenticationViewsRenderer.passwordReset)
router.get("/set-new-password", AuthenticationViewsRenderer.setNewPassword)
router.get("/logout", AuthenticationControllers.logOut)



//register all user account route
router.get("/dashboard", AuthenticationMiddleware.confirm, UserAccountViews.dashboard)



export default router;