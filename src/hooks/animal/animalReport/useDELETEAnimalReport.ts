import { api } from '@/src/lib/axios'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function deleteAnimalReport(id: string) {
  try {
    await api.delete(`/relatorio-animais/${id}`)
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data
  }
}

export function useDELETEAnimalReport() {
  const mutation = useMutation({
    mutationFn: deleteAnimalReport,
  })

  return mutation
}
