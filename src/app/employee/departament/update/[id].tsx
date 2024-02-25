import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { DEPARTAMENTS } from '@/src/utils/data/seed'
import { Input } from '@/src/components/input'

export default function Update() {
  const { id } = useLocalSearchParams()

  const departament = DEPARTAMENTS.find((item) => item.id === id)

  if (!departament) return <Redirect href="/employee/departament/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar departamento" />

      <View className="mb-12" style={{ gap: 16 }}>
        <Input title="Nome" value={departament.name} />

        <Input title="Iniciais" value={departament.initials} />
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
