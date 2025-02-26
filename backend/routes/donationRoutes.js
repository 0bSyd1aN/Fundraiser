import express from "express";
import { processDonation } from "../controllers/donationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, processDonation);

export default router;
