import * as Button from '@/src/components/button'
import DeleteModal from '@/src/components/delete-modal'
import { Loading } from '@/src/components/loading'
import { ReturnHeader } from '@/src/components/return-header'
import { useGETDepartamentById } from '@/src/hooks/departament/useGETDepartamentById'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'

export default function DepartamentById() {
  const { id } = useLocalSearchParams()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    data: departament,
    isError,
    isLoading,
  } = useGETDepartamentById(id.toString())

  if (isError) return <Redirect href="/employee/departament/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Departamento" />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          <View className="py-8">
            <View className="mb-12 gap-4">
              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  NOME
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {departament?.name}
                </Text>
              </View>

              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  INICIAIS
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {departament?.initials}
                </Text>
              </View>

              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  DATA DE CRIAÇÃO
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {departament?.createdAt}
                </Text>
              </View>
            </View>

            <View>
              <Link
                href={`/employee/departament/update/${id}`}
                asChild
                className="mb-3"
              >
                <Button.Root>
                  <Button.Icon>
                    <Feather name="edit" size={18} color={colors.slate[950]} />
                  </Button.Icon>
                  <Button.Title>Editar departamento</Button.Title>
                </Button.Root>
              </Link>

              <Button.Root
                variant="delete"
                onPress={() => setIsModalVisible(true)}
              >
                <Button.Icon>
                  <Feather name="trash-2" size={18} color={colors.slate[950]} />
                </Button.Icon>
                <Button.Title>Excluir departamento</Button.Title>
              </Button.Root>
            </View>
          </View>

          <DeleteModal
            item={departament}
            isOpen={isModalVisible}
            isVisible={isModalVisible}
            itemName={`o registro de ${departament?.name}`}
            onClose={() => setIsModalVisible(false)}
            onDelete={() => null}
          />
        </>
      )}
    </View>
  )
}
