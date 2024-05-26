import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { ANIMAL_REPORT } from '@/src/utils/data/animals'
import { Input } from '@/src/components/input'
import SelectComponent from '@/src/components/select'
import { categoryOptions, medicineOptions } from '../create'

export default function UpdateAnimalReportById() {
  const { id } = useLocalSearchParams()

  const report = ANIMAL_REPORT.find((item) => item.id === id)

  if (!report) return <Redirect href="/animal/animalReport/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar relatório" />

      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome do animal" defaultValue={report.animalName} />

          <SelectComponent
            title={'Categoria'}
            options={categoryOptions}
            value={report.animalCategory}
          />

          <Input title="Local encontrado" defaultValue={report.local} />

          <Input title="Data de chegada" defaultValue={report.arrivalDate} />

          <SelectComponent
            title="Medicamento"
            options={medicineOptions}
            value={report.medicine}
          />

          <Input
            title="Descrição"
            multiline={true}
            defaultValue={report.description}
          />
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
