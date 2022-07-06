<template>
  <div>
    <div class="diqu"><p>选择所在地区（实名认证主题所在地）</p></div>
    <div class="w">
      <input type="radio" name="city" id="" />中国大陆
      <input type="radio" name="city" id="" />中国香港
      <slot name="phone"></slot>
      <p>登录密码</p>
      <input type="password" name="password" id="" placeholder="请输入密码" />
      <input
        type="password"
        name="password"
        id=""
        placeholder="请输入再次确认密码"
      />
      <p>邀请码（选填）</p>
      <input type="number" name="" id="" placeholder="请输入客户经理邀请码" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
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
.tem input:nth-child(1) {
  width: 50px;
}
</style>
