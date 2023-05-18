import express from "express";
const router = express.Router();
import path from "path";
import { get_dish } from "../controller/get_dish";

router.get("/", get_dish);

export default router;
