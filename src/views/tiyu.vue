<template>
  <div>
    <h3>体育-改变人生</h3>
    <div>
      <router-link to="/tiyu/tiyumain">体育的主页</router-link>
      <router-link to="/tiyu/guonei">国内的体育</router-link>
      <router-link to="/tiyu/guowai">国外的体育</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
