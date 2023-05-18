import express from "express";
const router = express.Router();
import path from "path";
import { delete_Category } from "../controller/delete_Category";

router.delete("/:id", delete_Category);

export default router;
