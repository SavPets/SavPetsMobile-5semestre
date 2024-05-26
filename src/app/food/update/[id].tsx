import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { FOODS } from '@/src/utils/data/foods'
import { Input } from '@/src/components/input'

export default function UpdateFoodById() {
  const { id } = useLocalSearchParams()

  const food = FOODS.find((item) => item.id === id)

  if (!food) return <Redirect href="/food/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar Alimento" />

      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" defaultValue={food.name} />

          <Input title="Calorias" defaultValue={food.calories.toString()} />

          <Input title="Gorduras" defaultValue={food.fats.toString()} />

          <Input title="Proteínas" defaultValue={food.proteins.toString()} />

          <Input
            title="Data de Fabricação"
            keyboardType="numeric"
            maxLength={10}
            placeholder="DD/MM/YYYY"
            defaultValue={food.manufacturingDate}
          />

          <Input
            title="Data de Vencimento"
            keyboardType="numeric"
            maxLength={10}
            placeholder="DD/MM/YYYY"
            defaultValue={food.dueDate}
          />

          <Input title="Quantidade" defaultValue={food.amount.toString()} />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
      </ScrollView>
    </View>
  )
}
