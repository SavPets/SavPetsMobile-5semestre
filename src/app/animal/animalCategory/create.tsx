/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import React from 'react'
import { NativeBaseProvider } from 'native-base'
import ButtonSelect from '@/src/components/button-select'

export const GenderOptions = [
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' },
]

export const SizeOptions = [
  { label: 'Grande', value: 'grande' },
  { label: 'Médio', value: 'medio' },
  { label: 'Pequeno', value: 'pequeno' },
]

export default function CreateAnimalCategory() {
  return (
    <NativeBaseProvider>
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Nova categoria" />

        <View className="py-8">
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Nome" />

            <Input title="Cor" />

            <Input title="Raça" />

            <ButtonSelect title={'Gênero'} options={GenderOptions} value={''} />

            <ButtonSelect title={'Porte'} options={SizeOptions} value={''} />
          </View>

          <View>
            <Button.Root>
              <Button.Icon>
                <Feather
                  name="plus-square"
                  size={18}
                  color={colors.slate[950]}
                />
              </Button.Icon>
              <Button.Title>Cadastrar categoria</Button.Title>
            </Button.Root>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  )
}
