import { format } from 'date-fns'

export function formatDate(date: Date) {
  const formatedDate = format(date, 'dd/MM/yyyy')

  return formatedDate
}
