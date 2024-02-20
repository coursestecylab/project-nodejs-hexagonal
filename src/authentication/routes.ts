import express, { Router, Request, Response } from "express";
import { AuthCommand } from "./application/AuthCommand";
import { AuthCommandHandler } from "./application/AuthCommandHandler";
import { AuthHandler } from "./application/AuthHandler";
import { RedisAuthRepository } from "./infrastructure/RedisAuthRepository";

const router = Router();

const authRepository = new RedisAuthRepository();
const authHandler = new AuthHandler(authRepository);
const authCommandHandler = new AuthCommandHandler(authHandler);

router.use(express.json());

router.post("/authenticate", async (req: Request, res: Response) => {
  const { username, password } = req.body as AuthCommand;
  try {
    const token = await authCommandHandler.handle({ username, password });
    res.status(200).json({ token });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unexpected error occurred";
    res.status(400).json({ error: errorMessage });
  }
});

export default router;
