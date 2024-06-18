import require from '@/utils/http'

export const getDetail = (id) => {
  return require({
    url: '/goods',
    params: {
      id
    }
  })
}