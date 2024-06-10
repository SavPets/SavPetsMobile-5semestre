import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router'
import { Input } from '@/src/components/input'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useGETClientById } from '@/src/hooks/client/useGETClientById'
import { Loading } from '@/src/components/loading'
import { useToast } from 'native-base'
import { ClientSchema, clientSchema } from '@/src/schemas/clientSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { usePUTClient } from '@/src/hooks/client/usePUTClient'
import axios from 'axios'
import { AddressDTO } from '@/src/schemas/addressSchema'

export default function UpdateClientById() {
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [cep, setCep] = useState<string | undefined>(undefined)
  const [isCepCorrect, setIsCepCorrect] = useState<boolean | undefined>(
    undefined,
  )

  const { id } = useLocalSearchParams()

  const router = useRouter()
  const toast = useToast()

  const { data: client, isLoading, isError } = useGETClientById(id.toString())

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClientSchema>({
    resolver: yupResolver(clientSchema),

    defaultValues: {
      firstName: client?.firstName,
      lastName: client?.lastName,
      telephone: client?.telephone,
      cpf: client?.cpf,
      cep: client?.cep,
      address: client?.address,
      locationNumber: client?.locationNumber,
      complement: client?.complement,
    },
  })

  const { mutate, data: requestError, isPending, isSuccess } = usePUTClient()

  function handleUpdateClient({
    firstName,
    lastName,
    telephone,
    cpf,
    cep,
    address,
    locationNumber,
    complement,
  }: ClientSchema) {
    if (
      firstName === client?.firstName &&
      lastName === client?.lastName &&
      telephone === client?.telephone &&
      cpf === client?.cpf &&
      cep === client?.cep &&
      address === client?.address &&
      locationNumber === client?.locationNumber &&
      complement === client?.complement
    )
      return

    const updatedClient = {
      firstName,
      lastName,
      telephone,
      cpf,
      cep,
      address,
      locationNumber,
      complement,
    } as ClientSchema

    mutate({ id: id.toString(), updatedClient })
  }

  useEffect(() => {
    ;(async () => {
      if (cep?.length === 9) {
        await axios
          .get<AddressDTO>(`https://viacep.com.br/ws/${cep}/json/`)
          .then(({ data }) => {
            setAddress(data.logradouro)
            setIsCepCorrect(true)
          })
          .catch(() => {
            setAddress('')
            setIsCepCorrect(false)
          })
      }
    })()
  }, [cep])

  useEffect(() => {
    if (client) {
      setAddress(client?.address)
      setCep(client?.cep)
    }
  }, [client])

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
        title: 'Cliente atualizado com sucesso',
        placement: 'top',
        textAlign: 'center',
        bg: 'success.600',
      })
    }

    return router.navigate('/client/')
  }, [isSuccess, requestError, toast, router])

  if (isError) return <Redirect href="/client/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar cliente" />
      {isLoading || !client ? (
        <Loading />
      ) : (
        <Animated.ScrollView
          entering={FadeInUp}
          contentContainerStyle={{ paddingVertical: 32 }}
        >
          <View className="mb-12" style={{ gap: 16 }}>
            <Controller
              control={control}
              name="firstName"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Primeiro nome"
                  placeholder="José"
                  errorMessage={errors.firstName?.message}
                  defaultValue={value}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Último nome"
                  placeholder="Santos"
                  defaultValue={value}
                  errorMessage={errors.lastName?.message}
                  onChangeText={onChange}
                />
              )}
            />
            <Controller
              control={control}
              name="telephone"
              render={({ field: { onChange } }) => (
                <Input
                  title="Telefone"
                  placeholder="(11)98765-4321"
                  errorMessage={errors.telephone?.message}
                  onChangeText={onChange}
                  keyboardType="numbers-and-punctuation"
                />
              )}
            />
            <Controller
              control={control}
              name="cpf"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Telefone"
                  placeholder="123.456.789-10"
                  errorMessage={errors.cpf?.message}
                  defaultValue={value}
                  onChangeText={onChange}
                  keyboardType="numbers-and-punctuation"
                />
              )}
            />
            <Controller
              control={control}
              name="cep"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="CEP"
                  placeholder="01001-000"
                  errorMessage={errors.cep?.message}
                  onChangeText={onChange}
                  defaultValue={value}
                  onEndEditing={(e) => setCep(e.nativeEvent.text)}
                  keyboardType="numbers-and-punctuation"
                />
              )}
            />
            <Input
              title="Endereço"
              isReadOnly
              errorMessage={isCepCorrect === false ? 'CEP Inválido' : null}
              value={address}
              placeholder="Praça da Sé"
              keyboardType="numeric"
            />
            <Controller
              control={control}
              name="locationNumber"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Número da Residência"
                  placeholder="1200"
                  defaultValue={value.toString()}
                  errorMessage={errors.locationNumber?.message}
                  onChangeText={onChange}
                  keyboardType="numeric"
                />
              )}
            />
            <Controller
              control={control}
              name="complement"
              render={({ field: { onChange, value } }) => (
                <Input
                  title="Complemento"
                  placeholder="Casa A"
                  defaultValue={value || ''}
                  errorMessage={errors.complement?.message}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          <Button.Root
            disabled={isSubmitting || isPending}
            onPress={handleSubmit(handleUpdateClient)}
          >
            <Button.Icon>
              <Feather
                name="check-square"
                size={18}
                color={colors.slate[950]}
              />
            </Button.Icon>
            <Button.Title>Salvar alterações</Button.Title>
          </Button.Root>
        </Animated.ScrollView>
      )}
    </View>
  )
}
