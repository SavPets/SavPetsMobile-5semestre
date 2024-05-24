import * as Button from '@/src/components/button'
import { ListEmpty } from '@/src/components/list-empty'
import { CAMPAIGN } from '@/src/utils/data/campaign'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import colors from 'tailwindcss/colors'
// import Header from '@/src/components/header'

export default function Campaign() {
  return (
    <>
      {/* <Header userName="Matheus Carvalho" /> */}
      <View className="mx-5 mt-8 flex-1">
        <View className="flex-row items-center justify-between">
          <Text className="text-lg font-semibold leading-short text-white">
            Campanhas
          </Text>
          <Text className="font-body text-sm leading-short text-slate-300">
            Total de {CAMPAIGN.length}
          </Text>
        </View>

        <FlatList
          data={CAMPAIGN}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link href={`/campaign/${item.id}`} asChild>
              <TouchableOpacity
                activeOpacity={0.8}
                className="border-b border-slate-700 py-4"
              >
                <View className="mb-0.5 flex-row items-center justify-between">
                  <Text className="text-base font-semibold leading-short text-slate-100">
                    {item.name}
                  </Text>
                  <Text className="font-body text-sm leading-short text-slate-100">
                    {item.date}
                  </Text>
                </View>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.location}
                </Text>
                <Text className="font-body text-sm leading-relaxed text-slate-300">
                  {item.description}
                </Text>
              </TouchableOpacity>
            </Link>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={ListEmpty}
          className="my-8"
        />

        <View style={{ position: 'absolute', right: 0, bottom: 80 }}>
          <Link href="/campaign/create" asChild>
            {/* usando o princípio da composição selecionando apenas os itens que serão usados - ícone | texto */}

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
