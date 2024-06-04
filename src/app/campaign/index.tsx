import * as Button from '@/src/components/button'
import { Header } from '@/src/components/header'
import { ListEmpty } from '@/src/components/list-empty'
import { Loading } from '@/src/components/loading'
import { useGETCampaigns } from '@/src/hooks/campaign/useGETCampaigns'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import Animated, { SlideInLeft } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

export default function Campaign() {
  // pendente receber createdAt do backend
  const {
    data: campaignList,
    campaignCount,
    isLoading,
  } = useGETCampaigns()


  function formatDate(dateString: string): string {
    const months = [
      'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
      'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    const [day, month, year] = dateString.split('/').map(part => parseInt(part, 10));
    const monthName = months[month - 1];

    return `${day} de ${monthName} de ${year}`;
  }

  return (
    <>
      <Header userName="Mateus Simões" />

      {isLoading ? (
        <Loading />
      ) : (
        <View className="mx-5 mt-8 flex-1">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-semibold leading-short text-white">
              Campanhas
            </Text>
            <Text className="font-body text-sm leading-short text-slate-300">
              Total de {campaignCount}
            </Text>
          </View>

          <FlatList
            data={campaignList}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Link href={`/campaign/${item.id}`} asChild>
                <AnimatedTouchableOpacity
                  entering={SlideInLeft.delay(index * 150)}
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
                    {formatDate(item.date)}
                  </Text>
                  <Text className="font-body text-sm leading-relaxed text-slate-300">
                    {item.location}
                  </Text>
                </AnimatedTouchableOpacity>
              </Link>
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={ListEmpty}
            contentContainerStyle={{ paddingBottom: 100 }}
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
      )}
    </>
  )
}
