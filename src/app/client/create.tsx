import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import { NativeBaseProvider } from 'native-base'

export default function CreateClient() {
  return (
    <NativeBaseProvider>
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Novo cliente" />
        <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Primeiro nome" />
            <Input title="Último nome" />
            <Input title="Telefone" />
            <Input title="CPF" />
            <Input title="CEP" keyboardType="numeric" />
            <Input title="Endereço" />
            <Input title="Número" keyboardType="numeric" />
            <Input title="Complemento" />
          </View>
          <Button.Root>
            <Button.Icon>
              <Feather name="plus-square" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Cadastrar cliente</Button.Title>
          </Button.Root>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  )
}
