import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { ADOPTIONS } from '@/src/utils/data/adoptions'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function AdoptionById() {
  const { id } = useLocalSearchParams()
  const adoption = ADOPTIONS.find((item) => item.id === id)
  if (!adoption) return <Redirect href="/adoption/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Adoção" />
      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              NOME DO ANIMAL
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {adoption.animalName}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              FUNCIONÁRIO
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {adoption.employee}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              CLIENTE
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {adoption.client}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              DATA DE ADOÇÃO
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {adoption.adoptionDate}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              RELATÓRIO
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {adoption.report}
            </Text>
          </View>
        </View>
        <View style={{ gap: 12 }}>
          <Link href={`/adoption/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar adoção</Button.Title>
            </Button.Root>
          </Link>
        </View>
      </ScrollView>
    </View>
  )
}
