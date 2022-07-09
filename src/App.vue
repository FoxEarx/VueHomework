<template>
  <div>
    <div>
      <router-link to="/homepage">首页</router-link>
      <router-link to="/class">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/main">我的</router-link>
    </div>
    <div>
      <h1>显示路由切换的页面</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
