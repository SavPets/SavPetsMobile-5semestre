import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'

export default function CreateDepartament() {
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Novo departamento" />

      <View className="py-8">
        <View className="mb-12">
          <Input title="Nome" mb={4} />

          <Input title="Iniciais" />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="plus-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Cadastrar departamento</Button.Title>
        </Button.Root>
      </View>
    </View>
  )
}
