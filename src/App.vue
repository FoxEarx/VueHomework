<template>
  <div>
    <div v-for="item in arr" :key="item">
      <input type="checkbox" v-model="newArr" :value="item" /> {{ item }}
    </div>
    求和：{{ sumarr }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      newArr: [],
    }
  },

  computed: {
    sumarr() {
      return this.newArr.reduce((sum, next) => (sum += next), 0)
    },
  },
}
</script>

<style scoped></style>
