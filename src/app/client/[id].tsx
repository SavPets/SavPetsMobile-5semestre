import * as Button from '@/src/components/button'
import { DeleteModal } from '@/src/components/delete-modal'
import { Loading } from '@/src/components/loading'
import { ReturnHeader } from '@/src/components/return-header'
import { useDELETEClient } from '@/src/hooks/client/useDELETEClient'
import { useGETClientById } from '@/src/hooks/client/useGETClientById'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams, useRouter } from 'expo-router'
import { useToast } from 'native-base'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated'
import colors from 'tailwindcss/colors'

export default function ClientById() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const toast = useToast()

  const [isModalVisible, setIsModalVisible] = useState(false)

  const { data: client, isLoading, isError } = useGETClientById(id.toString())

  const { mutate, data: requestError, isSuccess } = useDELETEClient()

  function onDeleteClient() {
    mutate(id.toString())
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
    } else {
      toast.show({
        title: 'Cliente deletado com sucesso',
        placement: 'top',
        textAlign: 'center',
        bg: 'success.600',
      })
    }

    return router.navigate('/client/')
  }, [isSuccess, requestError, toast, router])

  if (isError) return <Redirect href="/client/" />

  const fullAdress = `${client?.address}, ${client?.locationNumber}${client?.complement ? ` - ${client.complement}` : ''}`

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Cliente" />
      {isLoading || !client ? (
        <Loading />
      ) : (
        <>
          <Animated.ScrollView
            entering={FadeInUp}
            contentContainerStyle={{ paddingVertical: 32 }}
          >
            <View className="mb-12 gap-4">
              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  PRIMEIRO NOME
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {client.firstName}
                </Text>
              </View>
              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  ÚLTIMO NOME
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {client.lastName}
                </Text>
              </View>
              {client.telephone && (
                <View className="gap-0.5">
                  <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                    TELEFONE
                  </Text>
                  <Text className="font-body text-base leading-relaxed text-slate-100">
                    {client.telephone}
                  </Text>
                </View>
              )}
              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  CPF
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {client.cpf}
                </Text>
              </View>
              <View className="gap-0.5">
                <Text className="text-base font-semibold uppercase leading-short text-slate-300">
                  Endereço Completo
                </Text>
                <Text className="font-body text-base leading-relaxed text-slate-100">
                  {fullAdress} - {client.cep}
                </Text>
              </View>
            </View>
            <View style={{ gap: 12 }}>
              <Link href={`/client/update/${id}`} asChild>
                <Button.Root>
                  <Button.Icon>
                    <Feather name="edit" size={18} color={colors.slate[950]} />
                  </Button.Icon>
                  <Button.Title>Editar Cliente</Button.Title>
                </Button.Root>
              </Link>

              <Button.Root
                variant="outline-delete"
                onPress={() => setIsModalVisible(true)}
              >
                <Button.Icon>
                  <Feather name="trash-2" size={18} color={colors.rose[400]} />
                </Button.Icon>
                <Button.Title className="text-rose-400">
                  Excluir Cliente
                </Button.Title>
              </Button.Root>
            </View>
          </Animated.ScrollView>
          <DeleteModal
            itemName={`${client.firstName} ${client.lastName}`}
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onDelete={onDeleteClient}
          />
        </>
      )}
    </View>
  )
}
