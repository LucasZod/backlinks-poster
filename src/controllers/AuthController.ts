import { Request, Response } from "express";
import User from "../models/User";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

export const login = async (req: Request, res: Response) => {
  const { password, userName } = req.body;
  if (!password || !userName) {
    return res
      .status(400)
      .json({ message: "Usuário e senha são obrigatórios." });
  }

  const user = await User.findOne({ where: { [Op.or]: { userName } } });

  if (user && (await user.comparePassword(password))) {
    const token = jwt.sign({ id: user.id }, "secret_key");
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: "strict",
    });
    res.cookie("isLogged", "true", {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: false,
      sameSite: "strict",
    });
    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Usuário ou senha incorretos." });
};
