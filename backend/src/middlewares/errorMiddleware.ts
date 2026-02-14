import type { NextFunction, Request, Response } from "express";

const errorMiddleware = (
  error: {
    message: string;
    statusCode: number;
  },
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  const message = error?.message || "Internal Server Error";
  const statusCode = error?.statusCode || 500;

  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

export default errorMiddleware;
