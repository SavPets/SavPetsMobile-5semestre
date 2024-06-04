import { api } from '@/src/lib/axios'
import { MedicineSchema } from '@/src/schemas/medicineSchema'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'

async function createDepartament(newMedicine: MedicineSchema) {
  try {
    await api.post('/medicamentos', newMedicine)
  } catch (error) {
    if (error instanceof AxiosError) return error.response?.data
  }
}

export function usePOSTDepartament() {
  const mutation = useMutation({
    mutationFn: createDepartament,
  })

  return mutation
}
