import { useState } from 'react'
import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'

export default function Create() {
  const [manufactureDate, setManufactureDate] = useState('')
  const [dueDate, setDueDate] = useState('')

  const formatDate = (inputDate: string) => {
    // Check if input is not empty and consists of exactly 8 digits
    if (inputDate && /^\d{8}$/.test(inputDate)) {
      const formattedDate = inputDate.replace(
        /(\d{2})(\d{2})(\d{4})/,
        '$1/$2/$3',
      )
      return formattedDate
    }
    return inputDate
  }

  const handleManufactureDateChange = (text: string) => {
    setManufactureDate(formatDate(text))
  }

  const handleDueDateChange = (text: string) => {
    setDueDate(formatDate(text))
  }

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Novo Alimento" />

      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" />

          <Input title="Calorias" />

          <Input title="Gorduras" />

          <Input title="Proteínas" />

          <Input
            title="Data de Fabricação"
            keyboardType="numeric"
            maxLength={10}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={colors.white}
            onChangeText={handleManufactureDateChange}
          />

          <Input
            title="Data de Vencimento"
            keyboardType="numeric"
            maxLength={10}
            placeholder="DD/MM/YYYY"
            placeholderTextColor={colors.white}
            onChangeText={handleDueDateChange}
          />

          <Input title="Quantidade" />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="plus-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Cadastrar Alimento</Button.Title>
        </Button.Root>
      </ScrollView>
    </View>
  )
}
