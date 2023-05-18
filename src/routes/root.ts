import express from "express";
const router = express.Router();
import path from "path";

router.get("^/$|/index(.html)?", (req, res) => {
  console.log(__dirname, "123");
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

export default router;
