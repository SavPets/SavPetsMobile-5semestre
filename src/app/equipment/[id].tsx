import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { EQUIPMENTS } from '@/src/utils/data/equipment'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function EquipmentsById() {
  const { id } = useLocalSearchParams()

  const equipment = EQUIPMENTS.find((item) => item.id === id)

  if (!equipment) return <Redirect href="/equipment/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Equipamento" />

      <View className="mb-12 gap-4">
        <View className="gap-0.5">
          <Text className="text-base font-semibold uppercase leading-short text-slate-300">
            NOME
          </Text>
          <Text className="font-body text-base leading-relaxed text-slate-100">
            {equipment?.name}
          </Text>
        </View>

        <View className="gap-0.5">
          <Text className="text-base font-semibold uppercase leading-short text-slate-300">
            Descrição
          </Text>
          <Text className="font-body text-base leading-relaxed text-slate-100">
            {equipment?.description}
          </Text>
        </View>

        <View className="gap-0.5">
          <Text className="text-base font-semibold uppercase leading-short text-slate-300">
            Data de Chegada
          </Text>
          <Text className="font-body text-base leading-relaxed text-slate-100">
            {equipment?.createdAt}
          </Text>
        </View>
      </View>

      <View style={{ gap: 12 }}>
        <Link href={`/equipment/update/${id}`} asChild>
          <Button.Root>
            <Button.Icon>
              <Feather name="edit" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Editar Equipamento</Button.Title>
          </Button.Root>
        </Link>

        <Button.Root>
          <Button.Icon>
            <Feather name="trash-2" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Excluir Equipamento</Button.Title>
        </Button.Root>
      </View>
    </View>
  )
}
