import express from "express";
import http from "http";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import RootRoutes from "./routes/root";
import addRoutes from "./routes/addRoutes";
import dishRoutes from "./routes/dishRoutes";
import FeatureRowRoutes from "./routes/FeatureRowRoutes";
import DeleteRoutes from "./routes/DeleteRoutes";

const app = express();

app.use(cors());
app.use(
  cors({
    origin: ["*"],
  })
);
app.use(compression());
app.use(morgan("common"));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

const rootDir = path.resolve(__dirname);
console.log("Root directory:", rootDir);

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", RootRoutes);

app.use("/img", express.static(path.join(__dirname, "img")));

app.use("/dish", dishRoutes);

app.use("/FeatureRow", FeatureRowRoutes);

app.use("/add", addRoutes);

app.use("/Delete", DeleteRoutes);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running on ${PORT} 🔥🔥🚀🚀`));

/*
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
*/
