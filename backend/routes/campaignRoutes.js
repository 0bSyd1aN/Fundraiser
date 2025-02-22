// backend/routes/campaignRoutes.js

import express from "express";
import { createCampaign } from "../controllers/campaignController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, createCampaign);

export default router;
