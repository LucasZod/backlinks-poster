import Customer from '../models/Customer'

type InputValues = {
  name: string
  cpfCnpj: string
  backLinks: string[]
  keyWords: string[]
}

export const validateCustomerInput = async (customer: InputValues) => {
  const { name, cpfCnpj, backLinks, keyWords } = customer

  if (!name || !cpfCnpj || !keyWords) {
    return { message: 'Nome, CPF/CNPJ e Palavra-chave são obrigatórios.' }
  }

  if (keyWords && !Array.isArray(keyWords)) {
    return { message: 'Formato de palavra-chave incorreto.' }
  }

  if (!backLinks) {
    return { message: 'Backlinks são obrigatórios.' }
  }

  if (backLinks && !Array.isArray(backLinks)) {
    return { message: 'Formato de backlinks incorreto.' }
  }

  const customerExists = await Customer.findOne({ where: { cpfCnpj } })
  if (customerExists) return { message: 'Cliente já existe.' }

  return null
}
