import type { NextFunction, Request, Response } from "express";
import { prisma } from "../lib/db";
import { ErrorHandler } from "../utils/ErrorHandler";

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;

  if (!name) return next(new ErrorHandler("Please provide a name", 400));

  const user = await prisma.user.create({
    data: {
      name,
    },
  });
  return res.status(200).json({
    success: true,
    message: "User created successfully",
    user,
  });
};

export { createUser };
