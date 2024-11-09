import Customer from '../models/Customer'

type InputValues = {
  cpfCnpj: string
  name: string
  newBackLinks: string[]
  id: string
  newKeyWords: string[]
}

export const validateCustomerUpdate = async ({ cpfCnpj, name, newBackLinks, id, newKeyWords }: InputValues) => {
  if (!cpfCnpj || !name) return { message: 'Nome e CPF/CNPJ são obrigatórios.' }

  const customer = await Customer.findByPk(id)
  if (!customer) return { message: 'Cliente não existe.' }

  if (cpfCnpj !== customer.cpfCnpj) {
    const customerExists = await Customer.findOne({ where: { cpfCnpj } })
    if (customerExists) return { message: 'Já existe um cliente com esse CPF/CNPJ.' }
  }

  if (newBackLinks && !Array.isArray(newBackLinks)) {
    return { message: 'Formato de backlinks incorreto.' }
  }

  if (newKeyWords && !Array.isArray(newKeyWords)) {
    return { message: 'Formato de palavras-chave incorreto.' }
  }

  return null
}
