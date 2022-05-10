import express from "express";
import AuthenticationControllers from "../controller/auth";
import { AuthenticationViewsRenderer, ContentCategoriesViewsRenderer, GeneralPagesViewsRenderer, UserAccountContentRenderer } from "../controller/views";
import "../config/passport.config"
import passport from "passport";
import { AuthenticationMiddleware } from "../middleware/auth";
const router = express.Router()


router.get("/", GeneralPagesViewsRenderer.indexPage);
router.get("/register", AuthenticationViewsRenderer.signUp)
router.post("/register", AuthenticationControllers.signup)
router.get("/login",
    AuthenticationViewsRenderer.login,
    UserAccountContentRenderer.dashboard)
router.post("/login", AuthenticationControllers.login)
router.get("/password-reset", AuthenticationViewsRenderer.passwordReset)
router.get("/set-new-password", AuthenticationViewsRenderer.setNewPassword)
router.get("/logout", AuthenticationControllers.logOut)

//resister all resource route
router.get("/animation", ContentCategoriesViewsRenderer.animation)
router.get("/icon", ContentCategoriesViewsRenderer.icons)
router.get("/illustrations", ContentCategoriesViewsRenderer.illustrations)
router.get("/code-snippets", ContentCategoriesViewsRenderer.codeSnippets)
router.get("/images", ContentCategoriesViewsRenderer.images)
router.get("/svg", ContentCategoriesViewsRenderer.svg)

//register all user account route
router.get("/dashboard",
    AuthenticationMiddleware.confirmAuthenticationStatus,
    UserAccountContentRenderer.dashboard)
//mount the page rendering to HTTP GET action


export default router;