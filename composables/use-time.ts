import { useDayjs } from '#dayjs'

const dayjs = useDayjs()

export const useTime = () => {
  const getCurrentTime = () => {
    return dayjs().format('YYYY-MM-DD HH:mm:ss')
  }

  return { getCurrentTime }
}
