import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useToast } from 'native-base'
import { useRouter } from 'expo-router'
import { usePOSTAdoption } from '@/src/hooks/adoption/usePOSTAdoption'
import { yupResolver } from '@hookform/resolvers/yup'
import { AdoptionSchema, adoptionSchema } from '@/src/schemas/adoptionSchema'
import { Controller, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useGETEmployess } from '@/src/hooks/employee/useGETEmployees'
import { Loading } from '@/src/components/loading'
import { Option, Select } from '@/src/components/select'
import { useGETClients } from '@/src/hooks/client/useGETClients'
import { useGETAnimalReports } from '@/src/hooks/animal/animalReport/useGETAnimalReports'

export default function CreateAdoption() {
  const [isLoading, setIsLoading] = useState(true)

  const employeeOptions: Option[] = []
  const clientOptions: Option[] = []
  const animalReportOptions: Option[] = []

  const router = useRouter()
  const toast = useToast()

  const { mutate, data: requestError, isPending, isSuccess } = usePOSTAdoption()

  const { data: employees, isLoading: isLoadingEmployees } = useGETEmployess()
  const { data: clients, isLoading: isLoadingClients } = useGETClients()
  const { data: animalReports, isLoading: isLoadingAnimalReports } =
    useGETAnimalReports()

  useEffect(() => {
    if (!isLoadingAnimalReports || !isLoadingClients || !isLoadingEmployees)
      setIsLoading(false)

    const entitieDontHaveData =
      employees?.length === 0 ||
      clients?.length === 0 ||
      animalReports?.length === 0

    if (entitieDontHaveData) {
      const title =
        employees?.length === 0
          ? 'Cadastre um Funcionário antes uma adoção'
          : clients?.length === 0
            ? 'Cadastre um Cliente antes de uma adoção'
            : 'Cadastre um Relatório de uma Animal antes uma adoção'

      toast.show({
        title,
        placement: 'top',
        textAlign: 'center',
        bg: 'rose.400',
      })

      return router.navigate('/adoption/')
    }
  }, [
    animalReports,
    clients,
    employees,
    isLoadingAnimalReports,
    isLoadingClients,
    isLoadingEmployees,
    requestError,
    router,
  ])

  employees?.forEach((employee) => {
    const newOption = {
      label: `${employee.name} ${employee.surname}`,
      value: employee.id,
    }

    employeeOptions.push(newOption)
  })

  clients?.forEach((client) => {
    const newOption = {
      label: `${client.firstName} ${client.lastName}`,
      value: client.id,
    }

    clientOptions.push(newOption)
  })

  animalReports?.forEach((animalReport) => {
    const newOption = {
      label: `${animalReport.animalName}`,
      value: animalReport.id,
    }

    animalReportOptions.push(newOption)
  })

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AdoptionSchema>({
    resolver: yupResolver(adoptionSchema),
  })

  function handleCreateAdoption({ employee }: AdoptionSchema) {
    mutate({ employee })
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
        title: 'Adoção criada com sucesso',
        placement: 'top',
        textAlign: 'center',
        bg: 'success.600',
      })
    }

    return router.navigate('/adoption/')
  }, [isSuccess, requestError, toast, router])

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Cadastrar adoção" />

      {isLoading ? (
        <Loading />
      ) : (
        <Animated.ScrollView
          entering={FadeInUp}
          contentContainerStyle={{ paddingVertical: 32 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-12" style={{ gap: 16 }}>
            <Controller
              control={control}
              name="employee"
              render={() => (
                <Select
                  options={employeeOptions}
                  title="Funcionário"
                  value={employeeOptions[0].value}
                  errorMessage={errors.employee?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="client"
              render={() => (
                <Select
                  options={clientOptions}
                  title="Cliente"
                  value={clientOptions[0].value}
                  errorMessage={errors.client?.message}
                />
              )}
            />
            <Input title="Data de adoção" />
            <Controller
              control={control}
              name="animalReport"
              render={() => (
                <Select
                  options={animalReportOptions}
                  title="Animal"
                  value={animalReportOptions[0].value}
                  errorMessage={errors.animalReport?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="report"
              render={({ field: { onChange } }) => (
                <Input
                  title="Relatório"
                  errorMessage={errors.report?.message}
                  onChangeText={onChange}
                  multiline
                  numberOfLines={4}
                />
              )}
            />
          </View>
          <Button.Root
            disabled={isSubmitting || isPending}
            onPress={handleSubmit(handleCreateAdoption)}
          >
            <Button.Icon>
              <Feather name="plus-square" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Cadastrar adoção</Button.Title>
          </Button.Root>
        </Animated.ScrollView>
      )}
    </View>
  )
}
