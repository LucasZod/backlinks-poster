import { Request, Response } from 'express'
import Customer from '../models/Customer'
import Backlink from '../models/Backlink'
import Campaign from '../models/Campaign'

export const getAll = async (req: Request, res: Response) => {
  const customers = await Customer.findAll({
    include: [
      { model: Backlink, as: 'backlinks' },
      { model: Campaign, as: 'campaigns' },
    ],
    order: [[{ model: Campaign, as: 'campaigns' }, 'createdAt', 'DESC']],
  })
  return res.json(customers)
}
