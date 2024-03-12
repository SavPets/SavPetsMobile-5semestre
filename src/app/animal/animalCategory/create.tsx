/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import React from 'react'
import { Box, NativeBaseProvider } from 'native-base'
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
  const RaceOptions = [
    { label: 'Pitbull', value: 'pitbull' },
    { label: 'Vira-Lata', value: 'vira-lata' },
    { label: 'Poodle', value: 'poodle' },
    { label: 'Pastor Alemão', value: 'pastor-alemao' },
    { label: 'Salsicha', value: 'salsicha' },
  ]

  return (
    // Arrumar
    <NativeBaseProvider>
      <Box className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Nova categoria" />
        <Box className=" mb-24   " style={{ gap: 16 }}>
          <Input title="Nome" />

          <Input title="Cor" />

          <Input title="Raça" />

          <ButtonSelect title={'Gênero'} options={GenderOptions} value={''} />

          <ButtonSelect title={'Porte'} options={SizeOptions} value={''} />

          {/* <Select title="Raça" options={RaceOptions} /> */}
        </Box>

        <View className="">
          <Button.Root>
            <Button.Icon>
              <Feather name="plus-square" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Cadastrar categoria</Button.Title>
          </Button.Root>
        </View>
      </Box>
    </NativeBaseProvider>
  )
}
