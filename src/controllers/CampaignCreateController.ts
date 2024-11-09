import { Request, Response } from 'express'
import { startCampaign } from '../services/startCampaign'

export const createCampaign = async (req: Request, res: Response) => {
  try {
    const { customerId } = req.params
    const message = await startCampaign(customerId)
    res.status(201).json(message)
  } catch (error: any) {
    const errorMessage = error?.message ?? 'Erro ao criar campanha.'
    res.status(500).json({ message: errorMessage })
  }
}
