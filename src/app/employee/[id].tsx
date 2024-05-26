import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { EMPLOYEES } from '@/src/utils/data/employees'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function EmployeeById() {
  const { id } = useLocalSearchParams()

  const employee = EMPLOYEES.find((item) => item.id === id)

  if (!employee) return <Redirect href="/employee/" />

  const fullAdress = `${employee.address}, ${employee.locationNumber} ${employee.complement ? `- ${employee.complement}` : ''}`

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Funcionário" />

      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Código do Funcionário
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.id}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Nome Completo
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.name} {employee.surname}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              E-mail
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.email}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              CPF
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.cpf}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              CEP
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.cep}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Endereço Completo
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {fullAdress}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Número da Conta
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.accountNumber}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Departamento
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.departament}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Ocupação
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {employee.occupation}
            </Text>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Link href={`/employee/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar Funcionário</Button.Title>
            </Button.Root>
          </Link>

          <Button.Root variant="delete">
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir Funcionário</Button.Title>
          </Button.Root>
        </View>
      </ScrollView>
    </View>
  )
}
