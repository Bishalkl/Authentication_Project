import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //allows us to parse incoming requests:req.body
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
