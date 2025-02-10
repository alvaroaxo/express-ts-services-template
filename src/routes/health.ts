import express from "express";
import { healthService } from "../services/healthService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(healthService().health);
});

export default router;
