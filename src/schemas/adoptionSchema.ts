import * as yup from 'yup'

export const adoptionSchema = yup.object({})

export type AdoptionSchema = yup.InferType<typeof adoptionSchema>

export interface AdoptionDTO {
  id: string
  employee: string
  client: string
  animalReport: string
  animalName: string
  adoptionDate: Date
  report: string
  createdAt: string
}
