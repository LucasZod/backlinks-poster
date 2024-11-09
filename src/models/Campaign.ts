import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'
import Customer from './Customer'

export default class Campaign extends Model {
  public id!: number
  public customerId!: number
  public status!: string
  public progress!: number
  public errorLogs?: string
  public paused!: boolean
}

Campaign.init(
  {
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Customer, key: 'id' },
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'iniciado',
    },
    progress: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    paused: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    errorLogs: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Campaign',
  }
)

export enum CAMPAIGN_STATUS {
  INICIADO = 'iniciado',
  EM_ANDAMENTO = 'em_andamento',
  PAUSADO = 'pausado',
  CONCLUIDO = 'concluido',
  ERRO = 'erro',
}
