<template>
  <div>
    <div class="diqu"><p>选择所在地区（实名认证主题所在地）</p></div>
    <div class="w">
      <input type="radio" name="city" id="" />中国大陆
      <input type="radio" name="city" id="" />中国香港
      <p></p>
      <div class="tem">
        <input type="email" name="" id="" placeholder="请输邮箱" />
      </div>
      <input type="email" name="" id="" placeholder="请输入验证码" />
      <button>发送验证码</button>
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
