import { Op } from 'sequelize'
import Backlink from '../models/Backlink'
import Campaign, { CAMPAIGN_STATUS } from '../models/Campaign'
import CampaignBlogsUrl from '../models/CampaignBlogsUrl'
import { sendBacklinks } from './sendBackLinks'
import { unpauseCampaign } from './unpauseCampaign'
import { pauseCampaign } from './pauseCampaign'

export const startCampaign = async (customerId: string) => {
  const campaign = await Campaign.findOne({
    where: { customerId, status: { [Op.ne]: 'concluido' } },
    order: [['createdAt', 'DESC']],
  })
  const { message } = await validateCampaign(campaign)
  if (message) return { message }

  const blogsUrl = getBlogsApiUrl()

  const newCampaign = await Campaign.create({ customerId })
  await CampaignBlogsUrl.bulkCreate(
    blogsUrl.map((blogUrl) => ({
      campaignId: newCampaign.id,
      url: blogUrl,
      status: 'pendente',
    }))
  )

  sendBacklinks(newCampaign.id)

  return { message: 'Campanha criada com sucesso.' }
}

async function validateCampaign(campaign: Campaign | null) {
  if (!campaign) return { message: null }

  if (campaign && campaign.status === CAMPAIGN_STATUS.PAUSADO) {
    return await unpauseCampaign(campaign.id)
  }

  if (campaign && campaign.status === CAMPAIGN_STATUS.EM_ANDAMENTO) {
    return await pauseCampaign(campaign.id)
  }

  return { message: null }
}

const getBlogsApiUrl = () => {
  return Array.from({ length: 100 }, (_, i) => `https://blogapi${i.toString().padStart(2, '0')}example.com/api/posts`)
}
