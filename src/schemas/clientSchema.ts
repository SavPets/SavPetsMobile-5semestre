import * as yup from 'yup'

export const clientSchema = yup.object({})

export type ClientSchema = yup.InferType<typeof clientSchema>

export interface ClientDTO {
  id: string
  firstName: string
  lastName: string
  cpf: string
  telephone: string
  cep: string
  address: string
  locationNumber: number
  complement: string
  createdAt: Date
}
