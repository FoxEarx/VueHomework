<template>
  <div>
    <div>
      <ul>
        <li>
          <router-link to="/contasts/allcontacts">All contacts</router-link>
        </li>
        <li><router-link to="/contasts/alice">Alice</router-link></li>
        <li><router-link to="/contasts/bob">Bob</router-link></li>
      </ul>
    </div>
    <button @click="btn">随机显示</button>
    <div>
      <router-view> </router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['/contasts/allcontacts', '/contasts/alice', '/contasts/bob'],
    }
  },
  methods: {
    btn() {
      const index = Math.floor(Math.random(0, 1) * 4)
      console.log(index)
      this.$router.push({
        path: this.arr[index],
      })
    },
  },
}
</script>

<style></style>
