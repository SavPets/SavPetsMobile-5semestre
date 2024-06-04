/* eslint-disable prettier/prettier */
import * as Button from '@/src/components/button'
import { Header } from '@/src/components/header'
import { ListEmpty } from '@/src/components/list-empty'
import { Loading } from '@/src/components/loading'
import { useGETMedicines } from '@/src/hooks/medicine/useGETMedicines'
import { formatDate } from '@/src/utils/formatDate'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function Medicine() {
  const { data: medicine, medicineCount, isLoading } = useGETMedicines()

  return (
    <>
      <Header userName="Mateus Simões" />
      {isLoading ? (
        <Loading />
      ) : (
      <View className="mx-5 mt-12 flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-semibold leading-short text-white">
            Medicamentos
          </Text>
          <Text className="font-body text-sm leading-short text-slate-300">
            Total de {medicineCount}
          </Text>
        </View>

        <FlatList
          data={medicine}
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
                    {formatDate(item.manufacturingDate)}
                  </Text>
                </View>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.provider}
                </Text>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.utility}
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
      )}
    </>
  )
}
