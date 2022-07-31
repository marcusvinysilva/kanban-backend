import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { BadRequestError } from "../helpers/api-errors";

export class AuthController {
  async login(req: Request, res: Response) {
    const { LOGIN_DEV, PASS_DEV } = process.env;

    if (LOGIN_DEV != "letscode" && PASS_DEV != "lets@123")
      throw new BadRequestError("Usuário e/ou senha inválidos");

    const token = jwt.sign({ id: LOGIN_DEV }, process.env.JWT_SECRET ?? "", {
      expiresIn: "24h",
    });

    return res.send({ token });
  }
}
