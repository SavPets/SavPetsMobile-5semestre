/* eslint-disable prettier/prettier */
import * as Button from '@/src/components/button'
import { Loading } from '@/src/components/loading'
import { ReturnHeader } from '@/src/components/return-header'
import { useGETMedicineById } from '@/src/hooks/medicine/useGETMedicineById'
import { formatDate } from '@/src/utils/formatDate'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

export default function MedicineByID() {
  const { id } = useLocalSearchParams()

  const {
    data: medicine,
    isError,
    isLoading
  } = useGETMedicineById(id.toString())

  if (isError) return <Redirect href="/employee/departament/" />

  return (    
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Medicamento" />

      {isLoading || !medicine ? (
        <Loading />
      ) : (
        <Animated.ScrollView entering={FadeInUp} className="py-8">
          <View className="mb-12 gap-4">
            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                Nome
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {medicine.name}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                Data fabricação
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {formatDate(medicine.manufacturingDate)}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                Data de validade
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {formatDate(medicine.expirationDate)}
              </Text>
            </View> 

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Fornecedor
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {medicine.provider}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                Utilidade
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {medicine.utility}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                Observação
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {medicine.observation}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Bula
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {medicine.leaflet}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Data de chegada
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {formatDate(medicine.arrivalDate)}
              </Text>
            </View>

            <View className="gap-0.5">
              <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Quantidade
              </Text>
              <Text className="font-body text-base leading-relaxed text-slate-100">
                {medicine.amount}
              </Text>
            </View>
          </View>

          <View style={{ gap: 12 }}>
            <Link href={`/medicine/update/${id}`} asChild>
              <Button.Root>
                <Button.Icon>
                  <Feather name="edit" size={18} color={colors.slate[950]} />
                </Button.Icon>
                <Button.Title>Editar medicamento</Button.Title>
              </Button.Root>
            </Link>

            <Button.Root variant="delete">
              <Button.Icon>
                <Feather name="trash-2" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Excluir medicamento</Button.Title>
            </Button.Root>
          </View>
        </Animated.ScrollView>
      )}
    </View>
  )
}
