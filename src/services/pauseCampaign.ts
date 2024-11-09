import Campaign from '../models/Campaign'

export const pauseCampaign = async (campaignId: number) => {
  const campaign = await Campaign.findByPk(campaignId)
  if (campaign && campaign.status === 'em_andamento') {
    campaign.paused = true
    campaign.status = 'pausado'
    await campaign.save()
    return { message: 'Campanha pausada com sucesso.' }
  }
  return { message: 'Campanha não encontrada ou não estava em andamento.' }
}
