import { getUserSession } from '../storages/auth'
import Login from './auth/login'
import Welcome from './welcome'

export default function Home() {
  const userSession = getUserSession()

  if (userSession) return <Welcome />

  return <Login />
}
