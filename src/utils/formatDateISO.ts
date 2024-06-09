import { format } from 'date-fns'

export function formatDateISO(date: Date | string | null | undefined) {
  if (!date) return null

  const formatedDate = format(date, 'yyyy-MM-dd')

  return formatedDate
}
