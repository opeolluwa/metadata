import express from "express";
import { Explore} from "../controller/explore";
const router = express.Router()
//resister all resource route dynamically based on the router parameter
router.get("/", Explore.render)
export default router;