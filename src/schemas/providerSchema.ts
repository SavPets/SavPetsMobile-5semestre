import * as yup from 'yup'

export const providerSchema = yup.object({})

export type ProviderSchema = yup.InferType<typeof providerSchema>

export type ProviderDTO = {
  id: string
  name: string
  cnpj: string
  cep: string
  address: string
  locationNumber: number
  complement: string
  telephone: string
  email: string
  createdAt: Date
}
