<template>
  <div>
    <input
      type="text"
      class="form-control"
      id="inputPassword2"
      placeholder="书名"
      v-model="bookname"
    />
    <input
      type="text"
      class="form-control"
      id="inputPassword2"
      placeholder="作者"
      v-model="author"
    />

    <input
      type="text"
      class="form-control"
      id="inputPassword2"
      placeholder="出版社"
      v-model="publisher"
    />
    <button type="button" class="btn btn-primary" @click="addBookFn">
      添加
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookname: '',
      author: '',
      publisher: '',
    }
  },
  methods: {
    addBookFn() {
      this.$axios({
        method: 'POST',
        url: '/api/addbook',
        data: {
          bookname: this.bookname,
          author: this.author,
          publisher: this.publisher,
        },
      }).then((res) => {
        if (res.data.status !== 201) {
          return alert(res.data.msg)
        } else {
          this.$axios({
            url: '/api/getbooks',
            method: 'GET',
          }).then((res) => {
            this.$emit('addBook', res)
          })
          return alert(res.data.msg)
        }
      })
    },
  },
}
</script>

<style scoped>
div {
  display: flex;
}
input {
  width: 200px;
  margin-right: 50px;
}
</style>
