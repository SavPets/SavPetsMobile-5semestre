import * as y from 'yup'

export const animalCategorySchema = y.object({
  name: y.string().required('O Nome é obrigatório').min(5, {
    message: 'O Nome precisa conter no mínimo 5 caracteres',
  }),
  race: y
    .string()
    .required('A Raça é obrigatório')
    .min(5, 'A Raça precisa conter no mínimo 5 caracteres'),
  gender: y.string().required('O Gênero é obrigatório'),
  size: y.string().required('O Porte é obrigatório'),
  coatColor: y
    .string()
    .required('A cor é obrigatória')
    .min(3, 'A Cor precisa contater no mínimo 3 caracteres'),
})

export type AnimalCategorySchema = y.InferType<typeof animalCategorySchema>
