import { api } from '@/src/lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function deleteAdoption(id: string) {
  try {
    await api.delete(`/adocao/${id}`)
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data
  }
}

export function useDELETEAdoption() {
  const mutation = useMutation({
    mutationFn: deleteAdoption,
  })

  return mutation
}
