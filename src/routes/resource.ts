import express from "express";
import AuthenticationControllers from "../controller/auth";
import { Resource, } from "../controller/views";
const router = express.Router()
//resister all resource route dynamically based on the router parameter
router.get("/:category", Resource.getResourceCategory)
export default router;