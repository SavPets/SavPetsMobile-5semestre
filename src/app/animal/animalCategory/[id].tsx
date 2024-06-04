import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import DeleteModal from '@/src/components/delete-modal'
import { useGETAnimalCategory } from '@/src/hooks/animal/animalCategory/useGETAnimalCategory'
import { Loading } from '@/src/components/loading'
import { useDELETEAnimalCategory } from '@/src/hooks/animal/animalCategory/useDELETEAnimalCategory'

export default function AnimalCategoryById() {
  const { id } = useLocalSearchParams()
  const {
    query: { data: category, isLoading },
  } = useGETAnimalCategory(id)

  const { mutation } = useDELETEAnimalCategory()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }

  function handleDeleteAnimalCategory() {
    mutation.mutate(id)

    return <Redirect href="/animal/animalCategory/" />
  }

  if (isLoading) return <Loading />

  if (!category) return <Redirect href="/animal/animalCategory/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Categoria" />

      <View className="py-8">
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Espécie
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {category?.name}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Raça
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {category?.race}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Cor
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {category?.coatColor}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Porte
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {category?.size}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Gênero
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {category?.gender}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Nome completo
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {category?.animalCategoryFull}
            </Text>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Link href={`/animal/animalCategory/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar categoria</Button.Title>
            </Button.Root>
          </Link>

          <Button.Root variant="delete" onPress={openModal}>
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir categoria</Button.Title>
          </Button.Root>
        </View>
      </View>

      <DeleteModal
        isVisible={isModalVisible}
        onClose={closeModal}
        item={category}
        isOpen={isModalVisible}
        itemName="o registro de Magnos"
        onDelete={handleDeleteAnimalCategory}
      />
    </View>
  )
}
