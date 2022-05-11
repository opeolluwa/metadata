import express from "express";
import AuthenticationControllers from "../controller/auth";
import { Resource, } from "../controller/views";
const router = express.Router()


//resister all resource route
router.get("/:category", Resource.getResourceCategory)
// router.get("/icon", ContentCategoriesViewsRenderer.icons)
// router.get("/illustrations", ContentCategoriesViewsRenderer.illustrations)
// router.get("/code-snippets", ContentCategoriesViewsRenderer.codeSnippets)
// router.get("/images", ContentCategoriesViewsRenderer.images)
// router.get("/svg", ContentCategoriesViewsRenderer.svg)

export default router;