import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'

export default class Customer extends Model {
  public id!: number
  public name!: string
  public cpfCnpj!: string
  public keyWords!: string[]
}

Customer.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpfCnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    keyWords: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Customer',
  }
)
