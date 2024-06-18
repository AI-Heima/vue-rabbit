import require from '@/utils/http'

export const getDetail = (id) => {
  return require({
    url: '/goods',
    params: {
      id
    }
  })
}

export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return require({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
