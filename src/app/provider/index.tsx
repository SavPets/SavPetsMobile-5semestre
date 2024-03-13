import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { PROVIDERS } from '@/src/utils/data/providers'

export default function Provider() {
  return (
    <View className="mx-5 mt-8 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold leading-short text-white">
          Fornecedores
        </Text>
        <Text className="font-body text-sm leading-short text-slate-300">
          Total de {PROVIDERS.length}
        </Text>
      </View>

      <FlatList
        data={PROVIDERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/provider/${item.id}`} asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="border-b border-slate-700 py-4"
            >
              <Text className="mb-0.5 text-base font-semibold leading-short text-slate-100">
                {item.name}
              </Text>

              <Text className="font-body text-sm leading-relaxed text-slate-300">
                {item.cnpj}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmpty}
        className="my-8"
      />

      <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
        <Link href="/provider/create" asChild>
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
