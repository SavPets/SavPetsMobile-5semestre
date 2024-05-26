import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'

export default function CreateProvider() {
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Novo Fornecedor" />

      <View className="py-8">
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Razão Social" />

          <Input title="CNPJ" />

          <Input title="CEP" />

          <Input title="Endereço" />

          <Input title="Número do Endereço" keyboardType="numeric" />

          <Input title="Complemento" />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="plus-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Cadastrar Fornecedor</Button.Title>
        </Button.Root>
      </View>
    </View>
  )
}
