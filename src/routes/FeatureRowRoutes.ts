import express from "express";
const router = express.Router();
import path from "path";
import { get_FeatureRow } from "../controller/FeatureRow_data";

router.get("/", get_FeatureRow);

export default router;
