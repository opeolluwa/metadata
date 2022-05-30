import express from "express";
import { ContactFormController } from "./../controller/contact";
const router = express.Router()
router.post("/", ContactFormController.index)
export default router;