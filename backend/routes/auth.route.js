import express from "express";

import path from "path";
console.log(path.resolve("../controllers/auth.controller.js"));

import {
  signup,
  login,
  logout,
  verifyEmail,
} from "../ controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

export default router;
