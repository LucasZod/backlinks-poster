import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'
import bcrypt from 'bcryptjs'

export default class User extends Model {
  public id!: number
  public email!: string
  public password!: string
  public cpfCnpj!: string

  public comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password)
  }
}

User.init(
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpfCnpj: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
)

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
})
