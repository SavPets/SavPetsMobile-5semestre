import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { ANIMAL_REPORT } from '@/src/utils/data/animals'

export default function AnimalReport() {
  return (
    <View className="mx-5 mt-8 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold leading-short text-white">
          Relatórios de animais
        </Text>
        <Text className="font-body text-sm leading-short text-slate-300">
          Total de {ANIMAL_REPORT.length}
        </Text>
      </View>

      <FlatList
        data={ANIMAL_REPORT}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/animal/animalReport/${item.id}`} asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="border-b border-slate-700 py-4"
            >
              <View className="mb-0.5 flex-row items-center justify-between">
                <Text className="text-base font-semibold leading-short text-slate-100">
                  {item.animalName}
                </Text>
                <Text className="font-body text-sm leading-short text-slate-100">
                  {item.createdAt}
                </Text>
              </View>

              <Text className="font-body text-sm leading-relaxed text-slate-300">
                {item.animalCategory}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmpty}
        className="my-8"
      />

      <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
        <Link href="/animal/animalReport/create" asChild>
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
