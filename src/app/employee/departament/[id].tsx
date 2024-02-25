import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { DEPARTAMENTS } from '@/src/utils/data/seed'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function DepartamentById() {
  const { id } = useLocalSearchParams()

  const departament = DEPARTAMENTS.find((item) => item.id === id)

  if (!departament) return <Redirect href="/employee/departament/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Departamento" />

      <View className="mb-12 gap-4">
        <View className="gap-0.5">
          <Text className="text-base font-semibold uppercase leading-short text-slate-300">
            NOME
          </Text>
          <Text className="font-body text-base leading-relaxed text-slate-100">
            {departament?.name}
          </Text>
        </View>

        <View className="gap-0.5">
          <Text className="text-base font-semibold uppercase leading-short text-slate-300">
            INICIAIS
          </Text>
          <Text className="font-body text-base leading-relaxed text-slate-100">
            {departament?.initials}
          </Text>
        </View>

        <View className="gap-0.5">
          <Text className="text-base font-semibold uppercase leading-short text-slate-300">
            DATA DE CRIAÇÃO
          </Text>
          <Text className="font-body text-base leading-relaxed text-slate-100">
            {departament?.createdAt}
          </Text>
        </View>
      </View>

      <View style={{ gap: 12 }}>
        <Link href={`/employee/departament/update/${id}`} asChild>
          <Button.Root>
            <Button.Icon>
              <Feather name="edit" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Editar departamento</Button.Title>
          </Button.Root>
        </Link>

        <Button.Root>
          <Button.Icon>
            <Feather name="trash-2" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Excluir departamento</Button.Title>
        </Button.Root>
      </View>
    </View>
  )
}
