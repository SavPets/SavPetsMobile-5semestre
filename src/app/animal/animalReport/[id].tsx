import * as Button from '@/src/components/button'
import { DeleteModal } from '@/src/components/delete-modal'
import { Loading } from '@/src/components/loading'
import { ReturnHeader } from '@/src/components/return-header'
import { useGETAnimalReportById } from '@/src/hooks/animal/animalReport/useGETAnimalReportById'
import { formatDate } from '@/src/utils/formatDate'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

export default function AnimalReportById() {
  const { id } = useLocalSearchParams()

  const {
    data: report,
    isLoading,
    isError,
  } = useGETAnimalReportById(id.toString())

  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  if (isError) return <Redirect href="/animal/animalReport/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Relatório" />

      {isLoading || !report ? (
        <Loading />
      ) : (
        <>
          <Animated.View entering={FadeInUp} className="py-8">
            <View className="mb-12 gap-4">
              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  Nome do animal
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {report.animalName}
                </Text>
              </View>

              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  Medicamento
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {report.medicine}
                </Text>
              </View>

              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  Categoria
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {report.animalCategory}
                </Text>
              </View>

              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  Data de chegada
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {formatDate(report.arrivalDate)}
                </Text>
              </View>

              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  Local encontrado
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {report.local}
                </Text>
              </View>
            </View>

            <View style={{ gap: 12 }}>
              <Link href={`/animal/animalReport/update/${id}`} asChild>
                <Button.Root>
                  <Button.Icon>
                    <Feather name="edit" size={18} color={colors.slate[950]} />
                  </Button.Icon>
                  <Button.Title>Editar relatório</Button.Title>
                </Button.Root>
              </Link>

              <Button.Root variant="delete" onPress={openModal}>
                <Button.Icon>
                  <Feather name="trash-2" size={18} color={colors.slate[950]} />
                </Button.Icon>
                <Button.Title>Excluir relatório</Button.Title>
              </Button.Root>
            </View>
          </Animated.View>
          <DeleteModal
            isVisible={isModalVisible}
            onClose={closeModal}
            itemName="o registro de Magnos"
            onDelete={() => {}} // TODO: Implementar o DELETE
          />
        </>
      )}
    </View>
  )
}
