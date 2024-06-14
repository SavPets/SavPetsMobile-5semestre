import { getUserSession } from '../storages/auth'
import Login from './auth/login'
import Employee from './employee'

export default function Home() {
  const userSession = getUserSession()

  if (userSession) return <Employee />

  return <Employee />
}
