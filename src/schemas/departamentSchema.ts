import * as yup from 'yup'

export const departamentSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  initials: yup.string().required(),
  createdAt: yup.string().required(),
})

export type DepartamentSchema = yup.InferType<typeof departamentSchema>
