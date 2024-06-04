import { Feather } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import userProfilerImage from '@/src/assets/user-profile.png'

interface HeaderProps {
  userName: string
}

export function Header({ userName }: HeaderProps) {
  const handleOpenMenu = () => {
    console.log('Menu aberto')
  }

  return (
    <View className="mt-16">
      <View className=" flex-row items-center justify-between bg-slate-900 px-6">
        <View className="mr-5 flex-row items-center">
          <Image alt="Imagem de perfil do usuário" source={userProfilerImage} />
          <Text className="ml-1 pl-4 text-lg font-bold leading-short text-white">
            {userName}
          </Text>
        </View>

        <TouchableOpacity onPress={handleOpenMenu} activeOpacity={0.8}>
          <Feather
            name="bar-chart"
            size={28}
            color="white"
            style={{ transform: [{ rotate: '-90deg' }] }}
          />
        </TouchableOpacity>
      </View>

      <View className="ml-5 mr-5 mt-6 justify-center border-b border-slate-700" />
    </View>
  )
}
