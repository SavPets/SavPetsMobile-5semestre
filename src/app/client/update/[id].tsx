import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { CLIENTS } from '@/src/utils/data/clients'
import { Input } from '@/src/components/input'
import { NativeBaseProvider } from 'native-base'

export default function UpdateClientById() {
  const { id } = useLocalSearchParams()
  const client = CLIENTS.find((item) => item.id === id)
  if (!client) return <Redirect href="/client/" />

  return (
    <NativeBaseProvider>
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Editar cliente" />
        <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Primeiro nome" defaultValue={client.firstName} />
            <Input title="Último nome" defaultValue={client.lastName} />
            <Input title="Telefone" defaultValue={client.telephone} />
            <Input title="CPF" defaultValue={client.cpf} />
            <Input
              title="CEP"
              defaultValue={client.cep}
              keyboardType="numeric"
            />
            <Input title="Endereço" defaultValue={client.address} />
            <Input
              title="Número"
              defaultValue={client.locationNumber.toString()}
              keyboardType="numeric"
            />
            <Input title="Complemento" defaultValue={client.complement} />
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
        </ScrollView>
      </View>
    </NativeBaseProvider>
  )
}
