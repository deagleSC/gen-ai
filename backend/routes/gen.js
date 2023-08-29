import express from "express";
import { genControl } from "../controllers/genControl.js";

const router = express.Router();

router.get("/", genControl);

export default router;
