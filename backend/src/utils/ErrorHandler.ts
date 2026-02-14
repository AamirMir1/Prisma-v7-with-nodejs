import type { NextFunction, Request, Response } from "express";

class ErrorHandler extends Error {
  constructor(
    public message: string,
    public statusCode: number,
  ) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}

type PassedFunctionType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void | Response<any, Record<string, any>>>;

export { ErrorHandler };
