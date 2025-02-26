import express from "express";
import { getTransactions } from "../controllers/transactionController.js";

const router = express.Router();

router.get("/:referralCode", getTransactions);

export default router;
