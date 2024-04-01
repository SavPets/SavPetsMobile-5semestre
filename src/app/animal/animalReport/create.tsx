/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReturnHeader } from '@/src/components/return-header'
import { View, ScrollView } from 'react-native'
import { Input } from '@/src/components/input'
import React from 'react'
import SelectComponent from '@/src/components/select'
import { NativeBaseProvider } from 'native-base'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'

import { OCCUPATIONS } from '@/src/utils/data/seed'
import { ANIMALS_CATEGORY } from '@/src/utils/data/animals'

export const occupationOptions = OCCUPATIONS.map((item) => ({
  label: item.name,
  value: item.name,
}))

export const categoryOptions = ANIMALS_CATEGORY.map(
  (
    item: {
      name: string
      race: string
      gender: string
      size: string
      coatColor: string
    },
    index,
  ) => ({
    label: `${item.name}, ${item.race}, ${item.gender}, ${item.size}, ${item.coatColor}`,
    value: `${item.name}_${index}`, // Aqui você concatena o nome com o índice para tornar único
  }),
)

export default function CreateAnimalReport() {
  return (
    <NativeBaseProvider>
      <View className="mx-5 mt-16 flex-1">
        <ReturnHeader title="Novo Relatório" />

        <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
          <View className="mb-12" style={{ gap: 16 }}>
            <Input title="Nome do animal" />

            <SelectComponent
              title={'Categoria'}
              options={categoryOptions}
              value={''}
            />

            <Input title="Local encontrado" />

            <Input title="Data de chegada" />

            <SelectComponent
              title={'Medicamento'}
              options={occupationOptions}
              value={''}
            />

            <Input title="Descrição" multiline={true} />
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
              <Button.Title>Cadastrar relatório</Button.Title>
            </Button.Root>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  )
}
