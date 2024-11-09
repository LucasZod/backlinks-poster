import { Router } from 'express'
import { createCampaign } from '../controllers/CampaignCreateController'
import authMiddleware from '../middleware'

const route = Router()
route.post('/create/:customerId', authMiddleware, createCampaign)

export default route
