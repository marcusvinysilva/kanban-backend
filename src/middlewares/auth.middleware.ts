import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-errors";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new UnauthorizedError("Não autorizado");

  const parts = authHeader.split(" ");

  if (parts.length !== 2) throw new UnauthorizedError("Não autorizado");

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) throw new UnauthorizedError("Não autorizado");

  jwt.verify(token, process.env.JWT_SECRET ?? "", async (err) => {
    if (err) throw new UnauthorizedError("Não autorizado");

    return next();
  });
};
