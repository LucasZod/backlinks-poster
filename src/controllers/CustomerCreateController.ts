import { Request, Response } from 'express'
import Customer from '../models/Customer'
import Backlink from '../models/Backlink'
import { validateCustomerInput } from '../functions/validateCustomerCreate'

export const create = async (req: Request, res: Response) => {
  const { name, cpfCnpj, backLinks, keyWords } = req.body
  const error = await validateCustomerInput({ name, cpfCnpj, backLinks, keyWords })
  if (error) return res.status(400).json(error)
  const trimBackLinks = trimItems(backLinks)
  const trimKeyWords = trimItems(keyWords)

  try {
    const customer = await Customer.create({ name, cpfCnpj, keyWords: trimKeyWords })
    const newBackLinks = trimBackLinks.map((link: string) => ({ url: link, customerId: customer.id }))
    await Backlink.bulkCreate(newBackLinks)
    const createdCustomer = await Customer.findByPk(customer.id, {
      include: [{ model: Backlink, as: 'backlinks' }],
    })
    return res.json(createdCustomer)
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao criar cliente.' })
  }
}

const trimItems = (items: string[]) => items.map((item: string) => item.trim())
