import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { Input } from '@/src/components/input'
import { useGETProviderById } from '@/src/hooks/provider/useGETProviderById'
import { Loading } from '@/src/components/loading'
import Animated, { FadeInUp } from 'react-native-reanimated'

export default function UpdateProviderByID() {
  const { id } = useLocalSearchParams()

  const {
    data: provider,
    isLoading,
    isError,
  } = useGETProviderById(id.toString())

  if (isError) return <Redirect href="/provider/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar fornecedor" />

      {isLoading || !provider ? (
        <Loading />
      ) : (
        <Animated.View entering={FadeInUp} className="py-8">
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
        </Animated.View>
      )}
    </View>
  )
}
