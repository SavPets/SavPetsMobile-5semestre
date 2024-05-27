import { api } from '@/src/lib/axios'
import { DepartamentSchema } from '@/src/schemas/departamentSchema'
import { useQuery } from '@tanstack/react-query'

async function fetchDepartaments() {
  const { data } = await api.get('/departamentos')

  return data
}

export function useGETDepartaments() {
  const query = useQuery<DepartamentSchema[]>({
    queryKey: ['departamentList'],

    queryFn: async () => await fetchDepartaments(),
    refetchInterval: 1000 * 60 * 5, // 5 minutes in milliseconds
  })

  const departamentCount = query.data?.length

  return { ...query, departamentCount }
}
