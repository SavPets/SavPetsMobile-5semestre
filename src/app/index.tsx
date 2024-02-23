import { View } from 'react-native'
import { Login } from './auth/login'

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Login />
    </View>
  )
}
