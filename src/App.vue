<template>
  <div>
    <h1>嵌套路由</h1>
    <div>
      <router-link to="/main">主页</router-link>
      <router-link to="/news">新闻</router-link>
      <router-link to="/tiyu">体育</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
