import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import Customer from "./Customer";

export default class Backlink extends Model {
  public id!: number;
  public url!: string;
  public customerId!: number;
}

Backlink.init(
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Customer,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    modelName: "Backlink",
  }
);
