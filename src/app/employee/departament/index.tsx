import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { DEPARTAMENTS } from '@/src/utils/data/seed'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function Departament() {
  return (
    <View className="mx-5 mt-8 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold leading-short text-white">
          Departamentos
        </Text>
        <Text className="font-body text-sm leading-short text-slate-300">
          Total de {DEPARTAMENTS.length}
        </Text>
      </View>

      <FlatList
        data={DEPARTAMENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/employee/departament/${item.id}`} asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="border-b border-slate-700 py-4"
            >
              <View className="mb-0.5 flex-row items-center justify-between">
                <Text className="text-base font-semibold leading-short text-slate-100">
                  {item.name}
                </Text>
                <Text className="font-body text-sm leading-short text-slate-100">
                  {item.createdAt}
                </Text>
              </View>

              <Text className="font-body text-sm leading-relaxed text-slate-300">
                {item.initials}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmpty}
        className="my-8"
      />

      <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
        <Link href="/employee/departament/create" asChild>
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
