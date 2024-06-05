import * as yup from 'yup'

export const adoptionSchema = yup.object({
  employee: yup.string().required('O funcionário precisa ser selecionado'),
  client: yup.string().required('O cliente precisa ser selecionado'),
  animalReport: yup.string().required('O animal precisa ser selecionado'),
  report: yup
    .string()
    .required('O relatório é obrigatório')
    .min(15, 'O relatório precisa ter, no mínimo, 15 caracteres'),
})

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
