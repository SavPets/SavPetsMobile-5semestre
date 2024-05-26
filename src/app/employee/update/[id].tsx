import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { EMPLOYEES } from '@/src/utils/data/employees'
import { Input } from '@/src/components/input'
import ButtonSelect from '@/src/components/button-select'
import { DepartamentOptions, OccupationOptions } from '../create'

export default function UpdateEmployeeById() {
  const { id } = useLocalSearchParams()

  const employee = EMPLOYEES.find((item) => item.id === id)

  if (!employee) return <Redirect href="/provider/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar funcionário" />

      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" defaultValue={employee.name} />

          <Input title="Sobrenome" defaultValue={employee.surname} />

          <Input
            title="Email"
            keyboardType="email-address"
            defaultValue={employee.email}
          />

          <Input
            title="CEP"
            keyboardType="numeric"
            defaultValue={employee.cep}
          />

          <Input title="Endereço" defaultValue={employee.address} />

          <Input
            title="Número do Local"
            keyboardType="numeric"
            defaultValue={employee.locationNumber.toString()}
          />

          <Input title="Complemento" defaultValue={employee.complement} />

          <ButtonSelect
            title="Departamento"
            options={DepartamentOptions}
            value={employee.departament}
          />

          <ButtonSelect
            title="Ocupação"
            options={OccupationOptions}
            value={employee.occupation}
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
