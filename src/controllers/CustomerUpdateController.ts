import { Request, Response } from 'express'
import Customer from '../models/Customer'
import Backlink from '../models/Backlink'
import { validateCustomerUpdate } from '../functions/validateCustomerUpdate'

export const update = async (req: Request, res: Response) => {
  const { id } = req.params
  const { cpfCnpj, name, newBackLinks, newKeyWords } = req.body
  const error = await validateCustomerUpdate({ cpfCnpj, name, newBackLinks, id, newKeyWords })
  if (error) return res.status(400).json(error)

  const trimBackLinks = trimItems(newBackLinks)
  const trimKeyWords = trimItems(newKeyWords)
  const formatedBackLinks = trimBackLinks.map((link: string) => ({ url: link, customerId: id }))

  try {
    await Customer.update({ name, cpfCnpj, keyWords: trimKeyWords }, { where: { id } })
    const backLinks = await Backlink.findAll({ where: { customerId: id } })
    if (backLinks) await Backlink.destroy({ where: { customerId: id } })
    await Backlink.bulkCreate(formatedBackLinks)
    const updatedCustomer = await Customer.findByPk(id, {
      include: [{ model: Backlink, as: 'backlinks' }],
    })
    return res.json(updatedCustomer)
  } catch (error: any) {
    console.log(error)
    return res.status(500).json({ message: 'Erro ao atualizar cliente.' })
  }
}

const trimItems = (items: string[]) => items.map((item: string) => item.trim())
