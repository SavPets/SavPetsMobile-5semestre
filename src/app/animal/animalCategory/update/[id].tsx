import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { ANIMALS_CATEGORY } from '@/src/utils/data/animals'
import { Input } from '@/src/components/input'
import ButtonSelect from '@/src/components/button-select'
import { GenderOptions, SizeOptions } from '../create'

export default function UpdateAnimalCategoryById() {
  const { id } = useLocalSearchParams()

  const category = ANIMALS_CATEGORY.find((item) => item.id === id)

  if (!category) return <Redirect href="/animal/animalCategory/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar categoria" />

      <View className="py-8">
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Espécie" value={category.name} />

          <Input title="Raça" value={category.race} />

          <Input title="Cor" value={category.coatColor} />

          <ButtonSelect
            title="Gênero"
            options={GenderOptions}
            value={category.gender}
          />
          <ButtonSelect
            title={'Porte'}
            options={SizeOptions}
            value={category.size}
          />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
      </View>
    </View>
  )
}
