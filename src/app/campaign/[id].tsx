import * as Button from '@/src/components/button'
import { ReturnHeader } from '@/src/components/return-header'
import { CAMPAIGN } from '@/src/utils/data/campaign'
import { Feather } from '@expo/vector-icons'
import { Link, Redirect, useLocalSearchParams } from 'expo-router'
import { Text, View } from 'react-native'
import colors from 'tailwindcss/colors'
import DeleteModal from '@/src/components/delete-modal'
import { useState } from 'react'

export default function CampaignByID() {
  const { id } = useLocalSearchParams()

  const campaign = CAMPAIGN.find((item) => item.id === id)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openModal = () => {
    setIsModalVisible(true)
  }

  const closeModal = () => {
    setIsModalVisible(false)
  }
  if (!campaign) return <Redirect href="/campaign/" />

  return (
    <View className="mx-5 mt-16 flex-1">
      <ReturnHeader title="Campanha" />

      <View className="py-8">
        <View className="mb-12 gap-4">
          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Nomes
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {campaign.name}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Data
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {campaign.date}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Horário
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {campaign.time}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Localização
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {campaign.location}
            </Text>
          </View>

          <View className="gap-0.5">
            <Text className="text-base font-semibold uppercase leading-short text-slate-300">
              Descrição
            </Text>
            <Text className="font-body text-base leading-relaxed text-slate-100">
              {campaign.description}
            </Text>
          </View>
        </View>

        <View style={{ gap: 12 }}>
          <Link href={`/campaign/update/${id}`} asChild>
            <Button.Root>
              <Button.Icon>
                <Feather name="edit" size={18} color={colors.slate[950]} />
              </Button.Icon>
              <Button.Title>Editar Campanha</Button.Title>
            </Button.Root>
          </Link>

          <Button.Root variant="delete" onPress={openModal}>
            <Button.Icon>
              <Feather name="trash-2" size={18} color={colors.slate[950]} />
            </Button.Icon>
            <Button.Title>Excluir Campanha</Button.Title>
          </Button.Root>
        </View>
      </View>

      <DeleteModal
        isVisible={isModalVisible}
        onClose={closeModal}
        item={campaign}
        isOpen={isModalVisible}
        itemName="o registro de patas em busca de lar"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onDelete={function (item: any): void {
          console.log('N pegou.' + item)
        }}
      />
    </View>
  )
}
