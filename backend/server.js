// backend/server.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import campaignRoutes from "./routes/campaignRoutes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/campaigns", campaignRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
