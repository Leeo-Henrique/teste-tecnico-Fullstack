import { Response } from "express";

export class AppError extends Error {
  statusCode;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: any, res: Response) => {
  const { statusCode, message } = err;
  if (err instanceof AppError) {
    return res.status(statusCode).json({
      status: "error",
      statusCode,
      message,
    });
  }
  console.log(err);
  return res.status(500).json({ message: "Internal server error" });
};
