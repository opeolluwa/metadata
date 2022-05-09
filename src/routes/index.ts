import express from "express";
import AuthenticationControllers from "../controller/auth";
import { AuthenticationViewsRenderer, ContentCategoriesViewsRenderer, GeneralPagesViewsRenderer, UserAccountContentRenderer } from "../controller/views";
import "../config/passport.config"
import passport from "passport";
const router = express.Router()


router.get("/", GeneralPagesViewsRenderer.indexPage);
router.get("/register", AuthenticationViewsRenderer.signUp)
    .post("/register", AuthenticationControllers.signup)
router.get("/login", AuthenticationViewsRenderer.login)
    .post("/login", AuthenticationControllers.login)
// .post('/login',
//     passport.authenticate('local', { failureRedirect: '/login' }),
//     function (req, res) {
//         res.redirect('/dashboard');
//     });
router.get("/password-reset", AuthenticationViewsRenderer.passwordReset)
router.get("/set-new-password", AuthenticationViewsRenderer.setNewPassword)

//resister all resource route
router.get("/animation", ContentCategoriesViewsRenderer.animation)
router.get("/icon", ContentCategoriesViewsRenderer.icons)
router.get("/illustrations", ContentCategoriesViewsRenderer.illustrations)
router.get("/code-snippets", ContentCategoriesViewsRenderer.codeSnippets)
router.get("/images", ContentCategoriesViewsRenderer.images)
router.get("/svg", ContentCategoriesViewsRenderer.svg)

//register all user account route
router.get("/dashboard", UserAccountContentRenderer.dashboard)
//mount the page rendering to HTTP GET action


export default router;