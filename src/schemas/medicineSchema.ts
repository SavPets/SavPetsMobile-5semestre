import * as yup from 'yup'

export const medicineSchema = yup.object({})

export type MedicineSchema = yup.InferType<typeof medicineSchema>

export interface MedicineDTO {
  id: string
  provider: string
  name: string
  leaflet: string
  utility: string
  expirationDate: Date
  observation: string
  arrivalDate: Date
  amount: number
  manufacturingDate: Date
  createdAt: Date
}
