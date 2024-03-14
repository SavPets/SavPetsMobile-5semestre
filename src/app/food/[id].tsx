import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { FOODS } from '@/src/utils/data/equipment'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function FoodById() {
  const { id } = useLocalSearchParams()

  const food = FOODS.find((item) => item.id === id)

  if (!food) return <Redirect href="/food/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Alimentos" />

      <View className="py-8">
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Nome
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.name}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Calorias
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.calories}g
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Gorduras
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.fats}g
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Proteínas
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.proteins}g
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Quantidade
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.amount}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Data de Fabricação
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.manufacturingdate}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Data de Vencimento
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {food.duedate}
            </Text>
          </View>
        </View>
        <View style={{ gap: 12 }}>
          <Link href={`/food/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar Alimento</Button.Title>
            </Button.Root>
          </Link>

          <Button.Root variant="delete">
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir Alimento</Button.Title>
          </Button.Root>
        </View>
      </View>
    </View>
  )
}
