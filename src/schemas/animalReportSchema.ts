import * as yup from 'yup'

export const animalReportSchema = yup.object({})

export type AnimalReportSchema = yup.InferType<typeof animalReportSchema>

export interface AnimalReportDTO {
  id: string
  animalName: string
  medicine: string
  animalCategory: string
  arrivalDate: Date
  local: string
  description: string
  createdAt: string
}
