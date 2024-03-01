/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReturnHeader } from '@/src/components/return-header'
import { View, Text } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import PickerComponent from '@/src/components/picker'

export default function CreateAnimalCategory() {
  const languageOptions = [
    { label: 'Java', value: 'java' },
    { label: 'JavaScript', value: 'js' },
    { label: 'Python', value: 'python' },
  ]
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Nova categoria" />

      <View className="mb-12" style={{ gap: 16 }}>
        <Input title="Nome" />

        <PickerComponent title={'Raça'} options={languageOptions} />
      </View>

      <Button.Root>
        <Button.Icon>
          <Feather name="plus-square" size={18} color={colors.slate[950]} />
        </Button.Icon>
        <Button.Title>Cadastrar categoria</Button.Title>
      </Button.Root>
    </View>
  )
}
