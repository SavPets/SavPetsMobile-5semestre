import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { PROVIDERS } from '@/src/utils/data/providers'
import { Input } from '@/src/components/input'
import { NativeBaseProvider } from 'native-base'

export default function UpdateProviderByID() {
  const { id } = useLocalSearchParams()

  const provider = PROVIDERS.find((item) => item.id === id)

  if (!provider) return <Redirect href="/provider/" />

  return (
    <NativeBaseProvider>
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Editar fornecedor" />

        <View className="py-8">
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Razão Social" defaultValue={provider.name} />

            <Input title="CNPJ" defaultValue={provider.cnpj} />

            <Input title="CEP" defaultValue={provider.cep} />

            <Input title="Endereço" defaultValue={provider.address} />

            <Input
              title="Número do Endereço"
              defaultValue={provider.locationNumber.toString()}
            />

            <Input title="Complemento" defaultValue={provider.complement} />
          </View>

          <Button.Root>
            <Button.Icon>
              <Feather
                name="check-square"
                size={18}
                color={colors.slate[950]}
              />
            </Button.Icon>
            <Button.Title>Salvar alterações</Button.Title>
          </Button.Root>
        </View>
      </View>
    </NativeBaseProvider>
  )
}
