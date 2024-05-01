/* eslint-disable prettier/prettier */
import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { MEDICINE } from '@/src/utils/data/medicine'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function Medicine() {
  return (
    <View className="mx-5 mt-12 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold leading-short text-white">
          Medicamentos
        </Text>
        <Text className="font-body text-sm leading-short text-slate-300">
          Total de {MEDICINE.length}
        </Text>
      </View>

      <FlatList
        data={MEDICINE}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/medicine/${item.id}`} asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="border-b border-slate-700 py-4"
            >
              <View className="mb-0.5 flex-row items-center justify-between">
                <Text className="text-base font-semibold leading-short text-slate-100">
                  {item.name}
                </Text>
                <Text className="font-body text-sm leading-short text-slate-100">
                  {item.manufacturingDate}
                </Text>
              </View>
              <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.expirationDate}
                </Text>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.utility}
                </Text>

              <Text className="font-body text-sm leading-relaxed text-slate-300">
                {item.observation}
              </Text>
              <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.amount}
                </Text>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.arrivalDate}
                </Text>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.leaflet}
                </Text>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.provider}
                </Text>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmpty}
        className="my-8"
      />

      <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
        <Link href="/medicine/create" asChild>
          {/* usando o princípio da composição selecionando apenas os itens que serão usados - ícone | texto */}

          <Button.Root isFloat>
            <Button.Icon>
              <Feather name="plus" size={28} color={colors.slate[950]} />
            </Button.Icon>
          </Button.Root>
        </Link>
      </View>
    </View>
  )
}
