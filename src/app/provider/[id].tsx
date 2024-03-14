import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { PROVIDERS } from '@/src/utils/data/providers'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function ProviderByID() {
  const { id } = useLocalSearchParams()

  const provider = PROVIDERS.find((item) => item.id === id)

  if (!provider) return <Redirect href="/provider/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Fornecedor" />

      <View className="py-8">
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Razão Social
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {provider?.name}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              CNPJ
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {provider?.cnpj}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              CEP
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {provider?.cep}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Endereço Completo
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {`${provider?.address}, ${provider.locationNumber} ${provider.complement ? ` - ${provider.complement}` : ''}`}
            </Text>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Link href={`/provider/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar Fornecedor</Button.Title>
            </Button.Root>
          </Link>

          <Button.Root variant="delete">
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir Fornecedor</Button.Title>
          </Button.Root>
        </View>
      </View>
    </View>
  )
}
