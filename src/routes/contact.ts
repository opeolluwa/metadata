import express from "express";
import { validateContactForm } from "./../validators/contact";
import { ContactFormController } from "./../controller/contact";
const router = express.Router()
router.post("/", validateContactForm, ContactFormController.index)
export default router;