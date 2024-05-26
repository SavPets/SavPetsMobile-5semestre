import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { CLIENTS } from '@/src/utils/data/clients'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function ClientById() {
  const { id } = useLocalSearchParams()
  const client = CLIENTS.find((item) => item.id === id)
  if (!client) return <Redirect href="/client/" />
  const fullAdress = `${client.address}, ${client.locationNumber} ${client.complement ? `- ${client.complement}` : ''}`

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Cliente" />
      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              PRIMEIRO NOME
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {client.firstName}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              ÚLTIMO NOME
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {client.lastName}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              TELEFONE
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {client.telephone}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              CPF
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {client.cpf}
            </Text>
          </View>
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Endereço Completo
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {fullAdress}
              {client.cep}
            </Text>
          </View>
        </View>
        <View style={{ gap: 12 }}>
          <Link href={`/client/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar Cliente</Button.Title>
            </Button.Root>
          </Link>
          <Button.Root variant="delete">
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir Cliente</Button.Title>
          </Button.Root>
        </View>
      </ScrollView>
    </View>
  )
}
