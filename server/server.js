import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import helloRouter from "./routes/hello.js";
import lenderRoutes from "./routes/lender.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const NODE_ENV = process.env.NODE_ENV || "development";

let MONGO_URI;

if (NODE_ENV === "production") {
  MONGO_URI = process.env.MONGO_URI_PROD;
} else {
  MONGO_URI = process.env.MONGO_URI_DEV;
}

if (!MONGO_URI) {
  throw new Error("Mongo URI not defined for this environment");
}

mongoose.connect(MONGO_URI)
  .then(() => console.log(`✅ MongoDB connected (${NODE_ENV})`))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/hello", helloRouter);
app.use("/api/lenders", lenderRoutes);

// Error handling
app.use((req, res) => res.status(404).json({ error: "Not Found" }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
