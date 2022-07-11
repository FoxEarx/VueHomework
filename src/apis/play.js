import request from '@/axios/request'
export const playSong = (id) =>
  request({
    url: `/song/detail?ids=${id}`,
    method: 'GET',
  })
export const getgeci = (id) =>
  request({
    url: `/lyric?id=${id}`,
    method: 'GET',
  })
