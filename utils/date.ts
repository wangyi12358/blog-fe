export function formatDate(date: Date | number | string) {
  return Intl.DateTimeFormat('zh').format(new Date(date))
}
