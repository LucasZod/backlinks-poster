import { Op } from 'sequelize'
import Backlink from '../models/Backlink'
import Campaign from '../models/Campaign'
import CampaignBlogsUrl from '../models/CampaignBlogsUrl'
import Customer from '../models/Customer'
import { isCampaignRunningInMemory, startCampaignInMemory, stopCampaignInMemory } from './campaignMemory'
import { getAIArticle } from './getAIArticle'

export const sendBacklinks = async (campaignId: number) => {
  if (isCampaignRunningInMemory(campaignId)) return
  await Campaign.update({ status: 'em_andamento' }, { where: { id: campaignId } })
  const campaign = await Campaign.findByPk(campaignId)

  startCampaignInMemory(campaignId)

  const campaignBlogsUrls = await CampaignBlogsUrl.findAll({
    where: { campaignId, status: { [Op.or]: ['pendente', 'em andamento'] } },
  })

  const backLinks = await Backlink.findAll({ where: { customerId: campaign?.customerId } })
  const customer = await Customer.findByPk(campaign?.customerId)
  const keyWords = customer?.keyWords ?? []

  for await (const campaignBlogsUrl of campaignBlogsUrls) {
    const currentCampaign = await Campaign.findByPk(campaignId)
    if (!currentCampaign || currentCampaign.paused) {
      console.log('Envio pausado para a campanha:', campaignId)
      stopCampaignInMemory(campaignId)
      return
    }

    if (currentCampaign.status === 'concluido') {
      console.log('Campanha concluída:', campaignId)
      stopCampaignInMemory(campaignId)
      return
    }

    campaignBlogsUrl.status = 'em andamento'
    await campaignBlogsUrl.save()

    try {
      for await (const backlinkUrl of backLinks) {
        const articleIA = await getAIArticle(backlinkUrl.url, keyWords)
        await simulateExternalPost(articleIA, campaignBlogsUrl.url)
      }
      campaignBlogsUrl.status = 'enviado'
    } catch (error) {
      campaignBlogsUrl.status = 'erro'
    }

    await campaignBlogsUrl.save()
    await updateCampaignProgress(campaignId, backLinks.length)
  }
}

async function simulateExternalPost(articleIA: string, url: string) {
  // await axios.post(url, { backlinkId })
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 5000)
  })
}

async function updateCampaignProgress(campaignId: number, backLinksUrlLength: number) {
  const campaign = await Campaign.findByPk(campaignId)
  if (!campaign) return
  const totalBlogs = await CampaignBlogsUrl.count({ where: { campaignId: campaign.id } })
  const sentBlogs = await CampaignBlogsUrl.count({
    where: { campaignId: campaign.id, status: 'enviado' },
  })

  if (sentBlogs === totalBlogs) {
    campaign.status = 'concluido'
    stopCampaignInMemory(campaignId)
  }
  campaign.progress = sentBlogs * backLinksUrlLength
  await campaign.save()
}
