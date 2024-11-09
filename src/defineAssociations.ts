import Customer from './models/Customer'
import Backlink from './models/Backlink'
import Campaign from './models/Campaign'
import CampaignBlogsUrl from './models/CampaignBlogsUrl'

export function defineAssociations() {
  Customer.hasMany(Backlink, {
    sourceKey: 'id',
    foreignKey: 'customerId',
    as: 'backlinks',
  })

  Backlink.belongsTo(Customer, {
    targetKey: 'id',
    foreignKey: 'customerId',
    as: 'customer',
  })

  Campaign.belongsTo(Customer, {
    targetKey: 'id',
    foreignKey: 'customerId',
    as: 'customer',
  })

  Customer.hasMany(Campaign, {
    sourceKey: 'id',
    foreignKey: 'customerId',
    as: 'campaigns',
  })

  CampaignBlogsUrl.belongsTo(Campaign, {
    targetKey: 'id',
    foreignKey: 'campaignId',
    as: 'campaign',
  })

  Campaign.hasMany(CampaignBlogsUrl, {
    sourceKey: 'id',
    foreignKey: 'campaignId',
    as: 'campaignBacklinks',
  })
}
