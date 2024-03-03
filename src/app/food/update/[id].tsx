import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { FOODS } from '@/src/utils/data/equipment'
import { Input } from '@/src/components/input'

export default function Update() {
  const { id } = useLocalSearchParams()

  const food = FOODS.find((item) => item.id === id)

  if (!food) return <Redirect href="/food/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar Alimento" />

      <View className="mb-12" style={{ gap: 16 }}>
        <Input title="Nome" value={food.name}/>

        <Input title="Calorias" value={food.calories} />

        <Input title="Gorduras" value={food.fats}/>

        <Input title="Proteínas" value={food.proteins}/>

        <Input title="Data de Fabricação" keyboardType="numeric" maxLength={10} placeholder="DD/MM/YYYY" value={food.manufacturingdate} />

        <Input title="Data de Vencimento" keyboardType="numeric" maxLength={10} placeholder="DD/MM/YYYY" value={food.duedate}/>

        <Input title="Quantidade" value={food.amount}  />
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
