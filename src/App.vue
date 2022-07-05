<template>
  <div class="bx">
    <bookHeader @addBook="addBookFn"></bookHeader>
    <bookMain :obj="getbook" @del="delBookFn"></bookMain>
    <bookFooter @findbook="findbookFn"></bookFooter>
  </div>
</template>

<script>
import bookMain from './components/bookMain'
import bookFooter from './components/bookFooter'
import bookHeader from './components/bookHeader.vue'
export default {
  methods: {
    delBookFn() {
      this.$axios({
        url: '/api/getbooks',
        method: 'GET',
      }).then((res) => {
        this.getbook = res.data.data
      })
    },
    findbookFn(val) {
      this.getbook = val
      console.log(this.getbook)
    },
    addBookFn(val) {
      this.getbook = val.data.data
    },
  },
  created() {
    this.$axios({
      url: '/api/getbooks',
      method: 'GET',
    }).then((res) => {
      this.getbook = res.data.data
      console.log(res)
      console.log(this.getbook)
    })
  },
  data() {
    return {
      getbook: null,
    }
  },
  components: {
    bookMain,
    bookFooter,
    bookHeader,
  },
}
</script>

<style scoped>
.bx {
  width: 1240px;
  margin: 0 auto;
}
</style>
