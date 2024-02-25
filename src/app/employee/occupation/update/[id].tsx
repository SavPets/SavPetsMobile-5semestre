import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { OCCUPATIONS } from '@/src/utils/data/seed'
import { Input } from '@/src/components/input'

export default function Update() {
  const { id } = useLocalSearchParams()

  const occupation = OCCUPATIONS.find((item) => item.id === id)

  if (!occupation) return <Redirect href="/employee/occupation/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar cargo" />

      <View className="mb-12" style={{ gap: 16 }}>
        <Input title="Nome" value={occupation.name} />

        <Input
          title="Descrição"
          multiline
          textAlignVertical="top"
          value={occupation.description}
        />
      </View>

      <Button.Root>
        <Button.Icon>
          <Feather name="check-square" size={18} color={colors.slate[950]} />
        </Button.Icon>
        <Button.Title>Salvar alterações</Button.Title>
      </Button.Root>
    </View>
  )
}
