import { Feather } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import userProfilerImage from '@/assets/images/user-profile.png'

// Verificar import da imagem dps
// const [userName, setUserName] = useState('');
// const [userData, setUserData] = useState<any>(null);

// Verificar uso do useState e useEffect

const handleOpenMenu = () => {
  console.log('👌')
}

const Header = ({ userName }: { userName: string }) => {
  return (
    <View className="mt-16">
      <View className=" flex-row items-center justify-between bg-gray-200 bg-slate-900 px-6">
        <View className="mr-5 flex-row items-center">
          <Image
            alt="Imagem de perfil do usuário"
            className=""
            source={userProfilerImage}
          />
          <Text className="ml-1 pl-4 text-lg font-bold leading-short text-white">
            {' '}
            {userName}{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={handleOpenMenu}>
          <Feather
            name="bar-chart"
            size={28}
            color="white"
            className=""
            style={{ transform: [{ rotate: '-90deg' }] }}
          />
        </TouchableOpacity>
      </View>
      <View className="ml-5 mr-5 mt-6 justify-center border-b border-slate-700"></View>
    </View>
  )
}

export default Header
