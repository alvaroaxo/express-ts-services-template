// src/interfaces/routes/userRoutes.ts
import express from "express";
import { UserController } from "../controllers/UserController";

const router = express.Router();
const userController = new UserController();

router.post("/users", userController.create.bind(userController));

export default router;
