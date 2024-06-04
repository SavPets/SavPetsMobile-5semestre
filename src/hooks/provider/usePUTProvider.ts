import { api } from '@/src/lib/axios'
import { ProviderSchema } from '@/src/schemas/providerSchema'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

interface UpdateProps {
  id: string
  updatedProvider: ProviderSchema
}

async function updateMedicine({ id, updatedProvider }: UpdateProps) {
  try {
    await api.put(`/fornecedores/${id}`, updatedProvider)
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data
  }
}

export function usePUTMedicine() {
  const mutation = useMutation({
    mutationFn: updateMedicine,
  })

  return mutation
}
