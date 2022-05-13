import express from "express";
import AuthenticationControllers from "../controller/auth";
import { ResourceViews, ResourceControllers } from "../controller/resource";
const router = express.Router()
//resister all resource route dynamically based on the router parameter
router.get("/:category", ResourceViews.getResourceCategory)
export default router;