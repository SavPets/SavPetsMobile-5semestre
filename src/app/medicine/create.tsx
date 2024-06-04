/* eslint-disable prettier/prettier */
import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import Animated, { FadeInUp } from 'react-native-reanimated'

export default function CreateMedicine() {
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Novo medicamento" />

      <Animated.ScrollView entering={FadeInUp} contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="py-8">
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Nome" />

            <Input title="Data de fabricação" />

            <Input title="Data de validade" />

            <Input title="utilidade" />

            <Input title="Observação" multiline={true} />

            <Input title="Quantidade" />

            <Input title="Data de chegada" />

            <Input title="Bula" />

            <Input title="Fornecedor" />
          </View>

          <Button.Root>
            <Button.Icon>
              <Feather name="plus-square" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Cadastrar Medicamento</Button.Title>
          </Button.Root>
        </View>
      </Animated.ScrollView>
    </View>
  )
}
