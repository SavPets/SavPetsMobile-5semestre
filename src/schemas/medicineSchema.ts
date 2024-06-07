import * as yup from 'yup'

export const medicineSchema = yup.object({
  name: yup
    .string()
    .required('O nome é obrigatório')
    .min(3, 'O nome precisa ter no mínimo 3 caracteres'),
  manufacturingDate: yup
    .string()
    .required('A data de fabricação é obrigatório')
    .min(10, 'A data de fabricação tem que ter 10 caracteres')
    .max(10, 'A data de fabricação tem que ter 10 caracteres')
    .matches(
      /^\d{2}\/\d{2}\/\d{4}/,
      'A data de fabricação precisa estar no formato correto (00/00/0000)',
    ),
  expirationDate: yup
    .string()
    .required('A data de validade é obrigatório')
    .min(10, 'A data de validade tem que ter 10 caracteres')
    .max(10, 'A data de validade tem que ter 10 caracteres')
    .matches(
      /^\d{2}\/\d{2}\/\d{4}/,
      'A data de validade precisa estar no formato correto (00/00/0000)',
    ),
  utility: yup.string().required('A utilidade é obrigatória'),
  observation: yup.string().optional().nullable(),
  amount: yup
    .number()
    .required('A quantidade é obrigatória')
    .min(1, 'A quantidade precisa ser superior a 1')
    .integer('O número precisa ser inteiro'),
  arrivalDate: yup
    .string()
    .required('A data de chegada é obrigatório')
    .min(10, 'A data de chegada tem que ter 10 caracteres')
    .max(10, 'A data de chegada tem que ter 10 caracteres')
    .matches(
      /^\d{2}\/\d{2}\/\d{4}/,
      'A data de chegada precisa estar no formato correto (00/00/0000)',
    ),
  leaflet: yup
    .string()
    .required('A bula é obrigatória')
    .min(10, 'A bula precisa ter no mínimo 10 caracteres'),
  provider: yup.string().required('O fornecedor é obrigatório'),
})

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
