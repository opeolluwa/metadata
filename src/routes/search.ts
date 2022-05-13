import express from "express";
import { SearchResult } from "../controller/search";
const router = express.Router()
//resister all resource route dynamically based on the router parameter
router.get("/", SearchResult.render)
export default router;