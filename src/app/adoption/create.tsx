import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import Animated, { FadeInUp } from 'react-native-reanimated'

export default function CreateAdoption() {
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Cadastrar adoção" />
      <Animated.ScrollView
        entering={FadeInUp}
        contentContainerStyle={{ paddingVertical: 32 }}
      >
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Funcionário" />
          <Input title="Cliente" />
          <Input title="Data de adoção" />
          <Input title="Animal" />
          <Input title="Relatório" multiline={true} numberOfLines={4} />
        </View>
        <Button.Root>
          <Button.Icon>
            <Feather name="plus-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Cadastrar adoção</Button.Title>
        </Button.Root>
      </Animated.ScrollView>
    </View>
  )
}
