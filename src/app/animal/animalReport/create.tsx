import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import React from 'react'
import ButtonSelect from '@/src/components/button-select'

export default function CreateAnimalReport() {
  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Novo Relatório" />

      <View className="mb-12" style={{ gap: 16 }}>
        <Input title="Nome do animal" />

        <Input title="Local Encontrado" />
        {/* <Select title="Categoria" options={RaceOptions} /> */}

        {/* <Select title="Medicamento" options={RaceOptions} /> */}
      </View>
    </View>
  )
}
