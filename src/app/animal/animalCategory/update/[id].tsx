import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { Input } from '@/src/components/input'
import ButtonSelect from '@/src/components/button-select'
import { GenderOptions, SizeOptions } from '../create'
import { useGETAnimalCategory } from '@/src/hooks/animalCategory/useGETAnimalCategory'
import { usePUTAnimalCategory } from '@/src/hooks/animalCategory/usePUTAnimalCategory'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  AnimalCategorySchema,
  animalCategorySchema,
} from '@/src/schemas/animalCategorySchema'

export default function UpdateAnimalCategoryById() {
  const { id } = useLocalSearchParams()
  const {
    query: { data: category },
  } = useGETAnimalCategory(id)

  const { mutation } = usePUTAnimalCategory()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AnimalCategorySchema>({
    resolver: yupResolver(animalCategorySchema),
  })

  function handleUpdateAnimalCategory(data: AnimalCategorySchema) {
    console.log(data)
  }

  if (!category) return <Redirect href="/animal/animalCategory/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar categoria" />

      <View className="py-8">
        <View className="mb-12" style={{ gap: 16 }}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                title="Espécie"
                defaultValue={category.name}
                errorMessage={errors.name?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="race"
            render={({ field: { onChange } }) => (
              <Input
                title="Raça"
                defaultValue={category.race}
                errorMessage={errors.race?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                title="Cor"
                defaultValue={category.coatColor}
                errorMessage={errors.coatColor?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="name"
            render={() => (
              <ButtonSelect
                title="Gênero"
                options={GenderOptions}
                errorMessage={errors.gender?.message}
                value={category.gender}
              />
            )}
          />

          <Controller
            control={control}
            name="name"
            render={() => (
              <ButtonSelect
                title={'Porte'}
                options={SizeOptions}
                value={category.size}
              />
            )}
          />
        </View>

        <Button.Root onPress={handleSubmit(handleUpdateAnimalCategory)}>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
      </View>
    </View>
  )
}
