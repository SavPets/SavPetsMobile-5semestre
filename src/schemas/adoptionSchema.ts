import * as yup from 'yup'

export const adoptionSchema = yup.object({
  employee: yup.string(),
  client: yup.string(),
  animalReport: yup.string(),
  animalName: yup.string(),
  adoptionDate: yup
    .string()
    .required('A data da adoção é obrigatória')
    .matches(
      /\d{4}-\d{2}-\d{2}/,
      'A data da adoção precisa estar no formato correto. Use YYYY-MM-DD',
    ),
  report: yup
    .string()
    .required('O relatório é obrigatório')
    .min(15, 'O relatório precisa ter, no mínimo, 15 caracteres'),
})

export type AdoptionSchema = yup.InferType<typeof adoptionSchema>

export type AdoptionDTO = AdoptionSchema & {
  id: string
  createdAt: string
}
