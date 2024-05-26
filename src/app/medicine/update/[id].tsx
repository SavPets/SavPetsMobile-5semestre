/* eslint-disable prettier/prettier */
import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { MEDICINE } from '@/src/utils/data/medicine'
import { Input } from '@/src/components/input'

export default function UpdateMedicineById() {
  const { id } = useLocalSearchParams()

  const medicine = MEDICINE.find((item) => item.id === id)

  if (!medicine) return <Redirect href="/medicine/" />

  return (
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Editar medicamento" />

        <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Nome" defaultValue={medicine.name} />

            <Input title="Data fabricação" defaultValue={medicine.manufacturingDate } />

            <Input title="Data de validade" defaultValue={medicine.expirationDate } />

            <Input title="Utilidade" defaultValue={medicine.utility } />

            <Input
              title="Descrição"
              multiline={true}
              defaultValue={medicine.observation}
            />

            <Input title="Quantidade" defaultValue={medicine.amount } />

            <Input title="Data de chegada" defaultValue={medicine.arrivalDate } />

            <Input title="Bula" defaultValue={medicine.leaflet } />

            <Input title="Fornecedor" defaultValue={medicine.provider } />

          </View>

          <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
            <Button.Title>Salvar alterações</Button.Title>
          </Button.Root>
        </ScrollView>
      </View>
  )
}
