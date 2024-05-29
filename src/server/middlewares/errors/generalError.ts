import { type NextFunction, type Request, type Response } from "express";
import type ServerError from "../ServerError/ServerError.js";
import chalk from "chalk";

const generalError = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  const statusCode = error.statusCode ?? 500;
  const errorMessage = error.message || "Server failed: Unknown error";

  console.log(chalk.red(`${error.message}`));

  res.status(statusCode).json({ error: `${errorMessage}` });
};

export default generalError;
