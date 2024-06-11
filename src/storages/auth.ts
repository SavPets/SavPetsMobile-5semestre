import { storage } from '../lib/mmkv'

export interface UserSessionProps {
  name: string
  surname: string
  email: string
  departament?: string | null
  occupation?: string | null
}

const STORAGE_AUTH_KEY = '@savpets:auth_user'

export function getUserSession() {
  const storedUserSession = storage.getString(STORAGE_AUTH_KEY)

  const userSession: UserSessionProps | null = storedUserSession
    ? JSON.parse(storedUserSession)
    : null

  return userSession
}

export function saveUserSession(userSession: UserSessionProps) {
  storage.set(STORAGE_AUTH_KEY, JSON.stringify(userSession))
}

export function deleteUserSession() {
  storage.delete(STORAGE_AUTH_KEY)
}
