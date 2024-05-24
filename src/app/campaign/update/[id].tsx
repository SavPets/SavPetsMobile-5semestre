import { ReturnHeader } from '@/src/components/return-header'
import { ScrollView, View } from 'react-native'
import * as Button from '@/src/components/button'
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { CAMPAIGN } from '@/src/utils/data/campaign'
import { Input } from '@/src/components/input'

export default function UpdateCampaignById() {
  const { id } = useLocalSearchParams()

  const campaign = CAMPAIGN.find((item) => item.id === id)

  if (!campaign) return <Redirect href="/campaign/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Editar campanha" />

      <ScrollView contentContainerStyle={{ paddingVertical: 32 }}>
        <View className="mb-12" style={{ gap: 16 }}>
          <Input title="Nome" defaultValue={campaign.name} />

          <Input title="Data" defaultValue={campaign.date} />

          <Input title="Horário" defaultValue={campaign.time} />

          <Input title="Localização" defaultValue={campaign.location} />

          <Input
            title="Descrição"
            multiline={true}
            defaultValue={campaign.description}
          />
        </View>

        <Button.Root>
          <Button.Icon>
            <Feather name="check-square" size={18} color={colors.slate[950]} />
          </Button.Icon>
          <Button.Title>Salvar alterações</Button.Title>
        </Button.Root>
      </ScrollView>
    </View>
  )
}
