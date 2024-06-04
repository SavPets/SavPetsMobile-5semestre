import { useMutation } from '@tanstack/react-query'
import { api } from '@/src/lib/axios'

async function updateAnimalCategory(id: string) {
  return await api.put(`/categorias-animais/${id}`)
}

export function usePUTAnimalCategory() {
  const mutation = useMutation({
    mutationFn: updateAnimalCategory,
  })

  return { mutation }
}
