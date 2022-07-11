<template>
  <van-cell :label="`${author}-${name}`" :title="name">
    <template>
      <van-icon color="#000" name="play-circle-o" size="28" @click="playFn" />
    </template>
  </van-cell>
</template>

<script>
export default {
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id,
        },
      })
    },
  },
  props: {
    name: String,
    author: String,
    id: Number,
  },
}
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid lightgray;
}
.van-cell__value {
  flex: 0 0 30px;
}
</style>
