import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { CLIENTS } from '@/src/utils/data/clients'

export default function Client() {
  return (
    <View className="mx-5 mt-8 flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-lg font-semibold leading-short text-white">
          Clientes
        </Text>
        <Text className="font-body text-sm leading-short text-slate-300">
          Total de {CLIENTS.length}
        </Text>
      </View>
      <FlatList
        data={CLIENTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/client/${item.id}`} asChild>
            <TouchableOpacity
              activeOpacity={0.8}
              className="border-b border-slate-700 py-4"
            >
              <Text className="mb-0.5 text-base font-semibold leading-short text-slate-100">
                {item.firstName} {item.lastName}
              </Text>
              <Text className="mb-0.5 font-body text-sm leading-relaxed text-slate-300">
                {item.telephone}
              </Text>
              <Text className="font-body text-sm leading-relaxed text-slate-300">
                {item.cpf}
              </Text>
            </TouchableOpacity>
          </Link>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ListEmpty}
        className="my-8"
      />
      <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
        <Link href="/client/create" asChild>
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
