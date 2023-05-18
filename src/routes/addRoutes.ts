import express from "express";
const router = express.Router();
import path from "path";
import { add_Category } from "../controller/add_Category";

router.get("/", add_Category);

export default router;
