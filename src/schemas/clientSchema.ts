import * as yup from 'yup'

export const clientSchema = yup.object({
  firstName: yup
    .string()
    .required('O primeiro nome é obrigatório')
    .min(3, 'O primeiro nome precisa ter no mínimo 3 caracteres'),
  lastName: yup
    .string()
    .required('O último nome é obrigatório')
    .min(3, 'O último nome precisa ter no mínimo 3 caracteres'),
  telephone: yup
    .string()
    .nullable()
    .optional()
    .default(null)
    .min(11, 'O telefone precisa ter 11 caracteres')
    .max(11, 'O telefone precisa ter 11 caracteres')
    .transform((value: string) => {
      if (value.length === 0) {
        return null
      } else {
        return value
      }
    }),
  cpf: yup
    .string()
    .required('O CPF é obrigatório')
    .min(11, 'O CPF precisa ter 11 caracateres')
    .max(11, 'O CPF precisa ter 11 caracateres'),
  cep: yup
    .string()
    .required('O CEP é obrigatório')
    .min(8, 'O CEP precisa ter 8 caracateres')
    .max(8, 'O CEP precisa ter 8 caracateres'),
  address: yup.string(),
  locationNumber: yup
    .number()
    .required('O número da residência é obrigatório')
    .min(1, 'O número da residência precisa ser superior a 1'),
  complement: yup.string().optional().nullable(),
})

export type ClientSchema = yup.InferType<typeof clientSchema>

export interface ClientDTO {
  id: string
  firstName: string
  lastName: string
  cpf: string
  telephone: string | null
  cep: string
  address: string
  locationNumber: number
  complement: string
  createdAt: Date
}
