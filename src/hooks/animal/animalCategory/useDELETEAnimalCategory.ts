import { useMutation } from '@tanstack/react-query'
import { api } from '@/src/lib/axios'

async function deleteAnimalCategory(id: string) {
  return await api.delete(`/categorias-animais/${id}`)
}

export function useDELETEAnimalCategory() {
  const mutation = useMutation({
    mutationFn: deleteAnimalCategory,
  })

  return { mutation }
}
