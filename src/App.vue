<template>
  <div>
    <div>
      <p>国内网站：粉丝数量:{{ msg | number(4) }} <span>万</span></p>
      <p>外国网站：粉丝数量:{{ msg | number(3) }} <span>千</span></p>
      <p>时间：{{ time | timer('-') }}</p>
      <p>时间：{{ time | timer('/') }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      msg: '1876928',
      time: 1636450540055,
    }
  },
  filters: {
    number(val, num) {
      const arr = val.split('')
      arr.splice(arr.length - num - 1, 1, '.')
      const str = arr.join('')
      return str
    },
    timer(val, sy) {
      return moment(val).format('YYYY' + sy + 'MM' + sy + 'SS')
    },
  },
}
</script>

<style></style>
