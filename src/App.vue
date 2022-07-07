<template>
  <div>
    <MyHeader title="田志强作业"></MyHeader>
    <div style="margin-top: 45px">
      <component :is="comName"></component>
    </div>
    <MyTabBar :list="tabList" @qh="comNameFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyTabBar from '@/components/MyTabBar'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyGoodsList from '@/views/MyGoodsList'
import MyUserInfo from '@/views/MyUserInfo'
export default {
  data() {
    return {
      comName: 'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    }
  },
  methods: {
    comNameFn(val) {
      this.comName = val
      console.log(this.comName)
    },
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsSearch,
    MyGoodsList,
    MyUserInfo,
  },
}
</script>

<style></style>
