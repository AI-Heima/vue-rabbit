import request from '@/utils/http'

// 获取我的订单列表
/* 
params: {
  orderState: 0,
  page: 1,
  pageSize: 2
}
*/
export const getUserOrder = (params) => {
  return request({
    url: '/member/order',
    params
  })
}
