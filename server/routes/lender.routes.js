import express from "express";
import { getLenders } from "../controllers/lender.controller.js";

const router = express.Router();

router.get("/", getLenders);

export default router;
