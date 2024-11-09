import Campaign from '../models/Campaign'
import { sendBacklinks } from './sendBackLinks'

export const resumeCampaign = async (campaignId: number) => {
  const campaign = await Campaign.findByPk(campaignId)
  if (campaign?.status === 'erro' || campaign?.status === 'em_andamento') {
    campaign.status = 'em_andamento'
    await campaign.save()
    sendBacklinks(campaignId)
  }
}
