import express from "express";
import AuthenticationControllers from "../controller/authentication";
import { AuthenticationViewsRenderer, GeneralPagesViewsRenderer } from "../controller/";
import { UserAccountViews } from "../controller/dashboard"
import "../config/passport.config"
import passport from "passport";
import { AuthenticationMiddleware } from "../middleware/auth";
import { ContactFormViews } from "./../controller/contact";
const router = express.Router()

//views
router.get("/", GeneralPagesViewsRenderer.indexPage);
router.get("/register", AuthenticationViewsRenderer.signUp)
router.get("/login", AuthenticationViewsRenderer.login, UserAccountViews.dashboard)
router.get("/password-reset", AuthenticationViewsRenderer.passwordReset)
router.get("/set-new-password", AuthenticationViewsRenderer.setNewPassword)
router.get("/logout", AuthenticationControllers.logOut)
router.get("/activate/:token", AuthenticationControllers.activate)
router.get("/contact", ContactFormViews.index);
router.get("/privacy-policy", GeneralPagesViewsRenderer.privacyPolicy);
router.get("/terms-of-use", GeneralPagesViewsRenderer.termsOfUse)
router.get("/cookie-policy", GeneralPagesViewsRenderer.cookiePolicy)

//controllers
router.post("/login", AuthenticationControllers.login)
router.post("/register", AuthenticationControllers.signup)
router.post("/password-reset", AuthenticationControllers.passwordReset)
router.post("/confirm-otp", AuthenticationControllers.confirmOtp)
router.post("/set-new-password", AuthenticationControllers.setNewPassword)


//register all user account route
router.get("/dashboard", AuthenticationMiddleware.confirm, UserAccountViews.dashboard)
export default router;