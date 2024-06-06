import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useToast } from 'native-base'
import { useRouter } from 'expo-router'
import { usePOSTProvider } from '@/src/hooks/provider/usePOSTProvider'
import { ProviderSchema, providerSchema } from '@/src/schemas/providerSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { AddressDTO } from '@/src/schemas/addressSchema'

export default function CreateProvider() {
  const [address, setAddress] = useState<string | undefined>(undefined)
  const [cep, setCep] = useState<string | undefined>(undefined)
  const [isCepCorrect, setIsCepCorrect] = useState<boolean | undefined>(
    undefined,
  )

  const router = useRouter()
  const toast = useToast()

  const { mutate, data: requestError, isPending, isSuccess } = usePOSTProvider()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProviderSchema>({
    resolver: yupResolver(providerSchema),
  })

  function handleChangeProvider({
    name,
    cep,
    cnpj,
    locationNumber,
    complement,
  }: ProviderSchema) {
    mutate({
      name,
      cep,
      cnpj,
      locationNumber,
      address,
      complement,
    })
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
        title: 'Fornecedor criado com sucesso',
        placement: 'top',
        textAlign: 'center',
        bg: 'success.600',
      })
    }

    return router.navigate('/provider/')
  }, [isSuccess, requestError, toast, router])

  useEffect(() => {
    ;(async () => {
      if (cep) {
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

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Novo Fornecedor" />

      <Animated.View entering={FadeInUp} className="py-8">
        <View className="mb-12" style={{ gap: 16 }}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange } }) => (
              <Input
                errorMessage={errors.name?.message}
                onChangeText={onChange}
                placeholder="PEDIGREE LTDA"
                title="Razão Social"
              />
            )}
          />
          <Controller
            control={control}
            name="cnpj"
            render={({ field: { onChange } }) => (
              <Input
                errorMessage={errors.cnpj?.message}
                onChangeText={onChange}
                title="CNPJ"
                placeholder="18833251000112"
                keyboardType="number-pad"
              />
            )}
          />

          <Controller
            control={control}
            name="cep"
            render={({ field: { onChange } }) => (
              <Input
                errorMessage={errors.cep?.message}
                onChangeText={onChange}
                title="CEP"
                placeholder="01001000"
                keyboardType="number-pad"
                onEndEditing={(e) => setCep(e.nativeEvent.text)}
              />
            )}
          />

          <Input
            title="Endereço"
            isReadOnly
            placeholder="Praça da Sé"
            errorMessage={isCepCorrect === false ? 'CEP Inválido' : null}
            value={address}
          />

          <Controller
            control={control}
            name="locationNumber"
            render={({ field: { onChange } }) => (
              <Input
                title="Número do Enderço"
                placeholder="1200"
                errorMessage={errors.locationNumber?.message}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            )}
          />

          <Controller
            control={control}
            name="complement"
            render={({ field: { onChange } }) => (
              <Input
                errorMessage={errors.complement?.message}
                onChangeText={onChange}
                title="Complemento"
                placeholder="Casa 1"
              />
            )}
          />
        </View>

        <Button.Root
          disabled={isSubmitting || isPending}
          onPress={handleSubmit(handleChangeProvider)}
        >
          <Button.Icon>
            <Feather name="plus-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Cadastrar Fornecedor</Button.Title>
        </Button.Root>
      </Animated.View>
    </View>
  )
}
