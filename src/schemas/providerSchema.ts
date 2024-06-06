import * as yup from 'yup'

export const providerSchema = yup.object({
  name: yup
    .string()
    .required('A razão social é obrigatória')
    .min(3, 'A razão social precisa ter no mínimo 3 caracteres'),
  cnpj: yup
    .string()
    .required('O CNPJ é obrigatório')
    .min(14, 'O CNPJ precisa ter 14 caracteres')
    .max(14, 'O CNPJ precisa ter 14 caracteres'),
  cep: yup
    .string()
    .required('O CEP é obrigatório')
    .min(8, 'O CEP precisa ter 8 caracteres')
    .max(8, 'O CEP precisa ter 8 caracteres'),
  address: yup.string(),
  locationNumber: yup
    .number()
    .required('O número do endereço é obrigatório')
    .min(1, 'O número do endereço deve ser maior do que 1'),
  complement: yup.string().optional().nullable(),
})

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
