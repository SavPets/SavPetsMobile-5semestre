import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { ANIMAL_REPORT } from '@/src/utils/data/animals'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function AnimalReportById() {
  const { id } = useLocalSearchParams()

  const report = ANIMAL_REPORT.find((item) => item.id === id)

  if (!report) return <Redirect href="/animal/animalReport/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Relatório" />

      <View className="py-8">
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Nome do animal
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {report?.animalName}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Medicamento
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {report?.medicine}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Categoria
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {report?.animalCategory}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Data de chegada
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {report?.createdAt}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Local encontrado
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {report?.local}
            </Text>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Link href={`/animal/animalReport/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar relatório</Button.Title>
            </Button.Root>
          </Link>

          <Button.Root variant="delete">
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir relatório</Button.Title>
          </Button.Root>
        </View>
      </View>
    </View>
  )
}
