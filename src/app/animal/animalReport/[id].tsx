import * as Button from '@/src/components/button'
import { DeleteModal } from '@/src/components/delete-modal'
import { Loading } from '@/src/components/loading'
import { ReturnHeader } from '@/src/components/return-header'
import { DetailItem } from '@/src/components/detail-item'
// import { formatDate } from '@/src/utils/formatDate'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams, useRouter } from 'expo-router'
import { useToast } from 'native-base'
import { useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'
import { useDELETEAnimalReport } from '@/src/hooks/animal/animalReport/useDELETEAnimalReport'
import { useGETAnimalReportById } from '@/src/hooks/animal/animalReport/useGETAnimalReportById'

export default function AnimalReportById() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const toast = useToast()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const {
    data: report,
    isError,
    isLoading,
  } = useGETAnimalReportById(id.toString())

  const { mutate, data: requestError, isSuccess } = useDELETEAnimalReport()

  function onDeleteAnimalReport() {
    console.log('chamando')
    mutate(id.toString())
    console.log('deu sim')
  }

  useEffect(() => {
    if (!isSuccess) return

    if (requestError) {
      toast.show({
        title: requestError,
        placement: 'top',
        textAlign: 'center',
        bg: 'rose.400',
      })
      console.log('errado')
    } else {
      toast.show({
        title: 'Relatório deletado com sucesso',
        placement: 'top',
        textAlign: 'center',
        bg: 'success.600',
      })
    }
    return router.navigate('/animal/animalReport/')
  }, [isSuccess, requestError, toast, router])

  if (isError) return <Redirect href="/animal/animalReport/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Relatório" />

      {isLoading || !report ? (
        <Loading />
      ) : (
        <>
          <Animated.View entering={FadeInUp} className="py-8">
            <View className="mb-12" style={{ gap: 16 }}>
              <DetailItem title="NOME DO ANIMAL" value={report.animalName} />

              <DetailItem title="MEDICAMENTO" value={report.medicine} />

              <DetailItem title="CATEGORIA" value={report.animalCategory} />

              <DetailItem title="DATA DE CHEGADA" value={report.createdAt} />

              <DetailItem title="LOCAL ENCONTRADO" value={report.local} />
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

              <Button.Root
                variant="delete"
                onPress={() => setIsModalVisible(true)}
              >
                <Button.Icon>
                  <Feather name="trash-2" size={18} color={colors.slate[950]} />
                </Button.Icon>
                <Button.Title>Excluir relatório</Button.Title>
              </Button.Root>
            </View>
          </Animated.View>
          <DeleteModal
            itemName={report.animalName}
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onDelete={onDeleteAnimalReport}
          />
        </>
      )}
    </View>
  )
}
