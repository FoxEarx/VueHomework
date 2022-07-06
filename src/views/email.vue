<template>
  <div>
    <div class="diqu"><p>选择所在地区（实名认证主题所在地）</p></div>
    <div class="w">
      <slot name="email"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.diqu {
  margin-left: 20px;
}
.w {
  background-color: #00c8c8;
  width: 340px;
  margin: 0 auto;
}
.tem {
  display: flex;
}
</style>
