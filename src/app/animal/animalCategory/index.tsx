/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { Loading } from '@/src/components/loading'
import { useGETAnimalCategories } from '@/src/hooks/animal/animalCategory/useGETAnimalCategories'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
import { Header } from '@/src/components/header'

export default function AnimalCategory() {
  const {
    query: { data, isLoading, isFetched },
    animalCategoriesCount,
  } = useGETAnimalCategories()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Header userName="Matheus Carvalho" />
      <View className="mx-5 mt-8 flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-semibold leading-short text-white">
            Categorias de animais
          </Text>
          <Text className="font-body text-sm leading-short text-slate-300">
            Total de {animalCategoriesCount}
          </Text>
        </View>

        {isFetched && (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Link href={`/animal/animalCategory/${item.id}`} asChild>
                <TouchableOpacity
                  activeOpacity={0.8}
                  className="border-b border-slate-700 py-4"
                >
                  <View className="mb-0.5 flex-row items-center justify-between">
                    <Text className="text-base font-semibold leading-short text-slate-100">
                      {item.name}
                    </Text>
                    <Text className="font-body text-sm leading-short text-slate-100">
                      {item.gender}
                    </Text>
                  </View>

                  <Text className="font-body text-sm leading-relaxed text-slate-300">
                    {item.race}
                  </Text>
                </TouchableOpacity>
              </Link>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ListEmpty}
            className="my-8"
          />
        )}

        <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
          <Link href="/animal/animalCategory/create" asChild>
            <Button.Root isFloat>
              <Button.Icon>
                <Feather name="plus" size={28} color={colors.slate[950]} />
              </Button.Icon>
            </Button.Root>
          </Link>
        </View>
      </View>
    </>
  )
}
