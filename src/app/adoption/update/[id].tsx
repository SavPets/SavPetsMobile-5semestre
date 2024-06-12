import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { ADOPTIONS } from '@/src/utils/data/adoptions'
import { Input } from '@/src/components/input'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default function UpdateAdoptionById() {
  const { id } = useLocalSearchParams()
  const adoption = ADOPTIONS.find((item) => item.id === id)
  if (!adoption) return <Redirect href="/adoption/" />

  return (
    <Animated.View entering={FadeInUp} className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar adoção" />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Funcionário" defaultValue={adoption.employee} />
          <Input title="Cliente" defaultValue={adoption.client} />
          <Input title="Data de adoção" defaultValue={adoption.adoptionDate} />
          <Input title="Animal" defaultValue={adoption.animalName} />
          <Input
            title="Relatório"
            multiline={true}
            numberOfLines={4}
            defaultValue={adoption.report}
          />
        </View>
        <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
        </KeyboardAwareScrollView>
        </Animated.View>
  )
}
