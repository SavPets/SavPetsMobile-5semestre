/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReturnHeader } from '@/src/components/return-header'
import { View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Input } from '@/src/components/input'
import ButtonSelect from '@/src/components/button-select'
import { useForm } from 'react-hook-form'
import {
  AnimalCategorySchema,
  animalCategorySchema,
} from '@/src/schemas/animalCategorySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import Animated, { FadeInUp } from 'react-native-reanimated'

export const GenderOptions = [
  { label: 'Macho', value: 'macho' },
  { label: 'Fêmea', value: 'femea' },
]

export const SizeOptions = [
  { label: 'Grande', value: 'grande' },
  { label: 'Médio', value: 'medio' },
  { label: 'Pequeno', value: 'pequeno' },
]

export default function CreateAnimalCategory() {
  const { register } = useForm<AnimalCategorySchema>({
    resolver: zodResolver(animalCategorySchema),
  })

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Nova categoria" />
      <Animated.View entering={FadeInUp} className="py-8">
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" {...register('name')} />

          <Input title="Cor" {...register('coatColor')} />

          <Input title="Raça" {...register('race')} />

          <ButtonSelect
            title={'Gênero'}
            options={GenderOptions}
            value={''}
            {...register('gender')}
          />

          <ButtonSelect
            title={'Porte'}
            options={SizeOptions}
            value={''}
            {...register('size')}
          />

          {/* <ButtonSelect title="Raça" options={RaceOptions} value={''} /> */}
        </View>

        <View>
          <Button.Root>
            <Button.Icon>
              <Feather name="plus-square" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Cadastrar categoria</Button.Title>
          </Button.Root>
        </View>
      </Animated.View>
    </View>
  )
}
