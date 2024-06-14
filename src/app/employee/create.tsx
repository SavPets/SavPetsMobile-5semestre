import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import ButtonSelect from '@/src/components/button-select'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const OccupationOptions = [
  { label: 'Desenvolvedor', value: 'Desenlvedor' },
  { label: 'Gerente', value: 'Gerente' },
  { label: 'Atendente', value: 'Atendente' },
  { label: 'Assistente Administrativo', value: 'Assistente Administrativo' },
  { label: 'Psicólogo', value: 'Psicólogo' },
  { label: 'Analista de Marketing', value: 'Analista de Marketing' },
  { label: 'Professor', value: 'Professor' },
  { label: 'Consultor Financeiro', value: 'Consultor Financeiro' },
  { label: 'Designer Gráfico', value: 'Designer Gráfico' },
  { label: 'Engenheiro Civil', value: 'Engenheiro Civil' },
]

export const DepartamentOptions = [
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Recursos Humanos', value: 'RH' },
  { label: 'Finanças', value: 'Finanças' },
  { label: 'Tecnologia da Informação', value: 'TI' },
  { label: 'Operações', value: 'Operações' },
]

export default function CreateEmployee() {
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Cadastrar funcionário" />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" />

          <Input title="Sobrenome" />

          <Input title="CPF" />

          <Input title="Email" keyboardType="email-address" />

          <Input title="CEP" keyboardType="numeric" />

          <Input title="Endereço" />

          <Input title="Número do Local" keyboardType="numeric" />

          <ButtonSelect
            value={null}
            title="Departamento"
            options={DepartamentOptions}
          />

          <ButtonSelect
            value={null}
            title="Ocupação"
            options={OccupationOptions}
          />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
      </KeyboardAwareScrollView>
    </View>
  )
}
