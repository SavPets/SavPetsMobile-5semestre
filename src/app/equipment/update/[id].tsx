import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { EQUIPMENTS } from '@/src/utils/data/equipments'
import { Input } from '@/src/components/input'

export default function UpdateEquipamentById() {
  const { id } = useLocalSearchParams()

  const equipment = EQUIPMENTS.find((item) => item.id === id)

  if (!equipment) return <Redirect href="/equipment/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar Equipamento" />

      <View className="py-8">
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" defaultValue={equipment.name} />

          <Input title="Descrição" defaultValue={equipment.description} />
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
