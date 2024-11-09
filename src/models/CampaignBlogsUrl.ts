import { Model, DataTypes } from 'sequelize'
import sequelize from '../config/database'
import Customer from './Customer'
import Campaign from './Campaign'

export default class CampaignBlogsUrl extends Model {
  public id!: number
  public campaignId!: number
  public url!: string
  public status!: string
}

CampaignBlogsUrl.init(
  {
    campaignId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: Campaign, key: 'id' },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pendente',
    },
  },
  {
    sequelize,
    modelName: 'CampaignBlogsUrl',
  }
)

export enum CAMPAIGN_BLOGS_STATUS {
  PENDENTE = 'pendente',
  EM_ANDAMENTO = 'em andamento',
  ENVIADO = 'enviado',
  ERRO = 'erro',
}
