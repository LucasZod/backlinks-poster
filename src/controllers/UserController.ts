import { Request, Response } from "express";
import User from "../models/User";
import { Op } from "sequelize";

export const create = async (req: Request, res: Response) => {
  const { cpfCnpj, email, password, userName } = req.body;
  const values = Object.values(req.body);
  if (values.filter(Boolean).length < 4) {
    return res
      .status(400)
      .json({ message: "Campos obrigatórios não preenchidos." });
  }

  const userExists = await User.findOne({
    where: { [Op.or]: { cpfCnpj, userName } },
  });

  if (userExists)
    return res.status(400).json({ message: "Usuário já existe." });

  try {
    const user = await User.create({ cpfCnpj, email, password, userName });
    return res.json(user).status(201);
  } catch (error) {
    throw new Error("O usuário não pôde ser criado.");
  }
};
