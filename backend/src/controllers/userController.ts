import type { Request, Response } from "express";
import { prisma } from "../lib/db";
import ErrorHandler from "../utils/ErrorHandler";

const createUser = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!name) return new ErrorHandler("Please provide name", 400);

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
  } catch (error) {
    const err = error as { message: string };

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export { createUser };
