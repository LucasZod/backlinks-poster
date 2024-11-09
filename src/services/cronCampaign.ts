import cron from 'node-cron'
import Campaign from '../models/Campaign'
import { isCampaignRunningInMemory } from './campaignMemory'
import { resumeCampaign } from './resumeCampaign'

const monitorCampaignJob = cron.schedule('* * * * *', async () => {
  console.log('Executando job de verificação de campanhas...')

  const campaigns = await Campaign.findAll({
    where: {
      status: 'em_andamento',
      paused: false,
    },
  })

  for (const campaign of campaigns) {
    if (!isCampaignRunningInMemory(campaign.id)) {
      console.log(`Campanha ${campaign.id} não está em execução, reiniciando...`)
      await resumeCampaign(campaign.id)
    }
  }
})

export default monitorCampaignJob
