import Campaign from '../models/Campaign'
import { isCampaignRunningInMemory, stopCampaignInMemory } from './campaignMemory'
import { sendBacklinks } from './sendBackLinks'

export const unpauseCampaign = async (campaignId: number) => {
  const campaign = await Campaign.findByPk(campaignId)
  if (campaign && campaign.status === 'pausado') {
    campaign.paused = false
    campaign.status = 'em_andamento'
    await campaign.save()
    if (isCampaignRunningInMemory(campaignId)) stopCampaignInMemory(campaignId)
    sendBacklinks(campaignId)
    return { message: 'Campanha retomada com sucesso.' }
  }
  return { message: 'Campanha não encontrada ou não estava pausada.' }
}
