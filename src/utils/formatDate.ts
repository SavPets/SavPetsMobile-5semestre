import { format } from 'date-fns'

export function formatDate(date: Date | string) {
  const formatedDate = format(date, 'dd/MM/yyyy')

  return formatedDate
}
