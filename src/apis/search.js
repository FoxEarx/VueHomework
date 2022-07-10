import request from '@/axios/request'
export const searchResult = (params) =>
  request({
    url: '/search/hot',
    params,
  })
export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  })
