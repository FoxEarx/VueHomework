import request from '@/axios/request'
export const getRecommendList = (params) =>
  request({
    url: '/personalized',
    params,
  })
export const getNewSongList = (params) =>
  request({
    url: '/personalized/newsong',
    params,
  })
