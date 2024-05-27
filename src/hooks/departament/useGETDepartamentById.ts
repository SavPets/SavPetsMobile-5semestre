import { api } from '@/src/lib/axios'
import { DepartamentSchema } from '@/src/schemas/departamentSchema'
import { useQuery } from '@tanstack/react-query'

async function fetchDepartamentById(id: string) {
  const { data } = await api.get(`/departamentos/${id}`)

  return data
}

export function useGETDepartamentById(id: string) {
  const query = useQuery<DepartamentSchema>({
    queryKey: ['departament'],

    queryFn: async () => await fetchDepartamentById(id),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in milliseconds
  })

  return query
}
