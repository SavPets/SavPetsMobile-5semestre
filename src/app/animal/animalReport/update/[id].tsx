import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { ANIMAL_REPORT } from '@/src/utils/data/animals'
import { Input } from '@/src/components/input'
import { NativeBaseProvider } from 'native-base'
import SelectComponent from '@/src/components/select'
import { categoryOptions, occupationOptions } from '../create'

export default function UpdateAnimalReport() {
  const { id } = useLocalSearchParams()

  const report = ANIMAL_REPORT.find((item) => item.id === id)

  if (!report) return <Redirect href="/animal/animalReport/" />

  return (
    <NativeBaseProvider>
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Editar relatório" />

        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome do animal" value={report.animalName} />

          <SelectComponent
            title={'Categoria'}
            options={categoryOptions}
            value={report.animalCategory}
          />

          <Input title="Local encontrado" value={report.local} />

          <Input title="Data de chegada" value={report.arrivalDate} />

          <SelectComponent
            title={'Medicamento'}
            value={report.medicine}
            options={occupationOptions}
          />

          <Input
            title="Descrição"
            multiline={true}
            value={report.description}
          />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
      </View>
    </NativeBaseProvider>
  )
}
