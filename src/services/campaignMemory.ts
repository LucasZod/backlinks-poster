const memoryCampaigns = new Set<number>()

export const startCampaignInMemory = (campaignId: number) => {
  memoryCampaigns.add(campaignId)
}

export const stopCampaignInMemory = (campaignId: number) => {
  memoryCampaigns.delete(campaignId)
}

export const isCampaignRunningInMemory = (campaignId: number) => {
  return memoryCampaigns.has(campaignId)
}
