<template>
  <div class="find">
    <input
      type="text"
      class="form-control"
      id="inputPassword2"
      placeholder="搜索-书本名称"
      v-model.trim="findbook"
      @keydown.enter="findbookFn"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      findbook: '',
      obj: {
        type: Array,
        default: () => [],
      },
    }
  },
  methods: {
    findbookFn() {
      if (this.findbook == '') {
        return alert('书名不能为空')
      }
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
        params: {
          bookname: this.findbook,
        },
      }).then((res) => {
        if (res.data.data.length == 0) {
          return alert('暂无此书')
        }
        this.$emit('findbook', res.data.data)
        console.log(res)
      })
      this.findbook = ''
    },
  },
}
</script>

<style scoped>
.find {
  width: 200px;
}
</style>
