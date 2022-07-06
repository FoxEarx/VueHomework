<template>
  <div>
    <div>
      <a href="javascript:;" @click="comName = 'ph'">手机注册</a>
      <a href="javascript:;" @click="comName = 'email'">邮箱注册</a>
    </div>
    <keep-alive>
      <component :is="comName">
        <template v-slot:phone
          ><p>手机号码</p>
          <div class="tem">
            <input type="text" name="" id="" value="+86" />
            <input type="number" name="" id="" placeholder="请输入手机号" />
          </div>
          <input type="number" name="" id="" placeholder="请输入验证码" />
          <button>发送验证码</button>
        </template>
        <template v-slot:email>
          <input type="radio" name="city" id="" />中国大陆
          <input type="radio" name="city" id="" />中国香港
          <p></p>
          <div class="tem">
            <input type="email" name="" id="" placeholder="请输邮箱" />
          </div>
          <input type="email" name="" id="" placeholder="请输入验证码" />
          <button>发送验证码</button>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import ph from '../views/ph.vue'
import email from '../views/email.vue'
export default {
  data() {
    return {
      comName: 'ph',
    }
  },
  components: {
    ph,
    email,
  },
}
</script>

<style scoped>
a {
  font-size: 30px;
  margin-left: 40px;
}
</style>
