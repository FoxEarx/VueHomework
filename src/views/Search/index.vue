<template>
  <div>
    <van-search shape="round" placeholder="请输入搜索关键词" v-model="value" />
    <!-- 热门搜索 -->
    <template v-if="SearchList.length == 0"
      ><van-cell title="热门搜索" />
      <div style="padding: 10px 16px">
        <van-tag
          color="#ccc"
          size="large"
          text-color="blue"
          plain
          round
          type="primary"
          v-for="(item, index) in hot"
          :key="index"
          style="margin-right: 6px"
          @click="clickFn(item.first)"
        >
          {{ item.first }}
        </van-tag>
      </div></template
    >
    <!-- ---------------------------------------------------------------- -->
    <template v-else
      ><van-cell title="最佳匹配" />
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell
          v-for="item in SearchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        /> </van-list
    ></template>
  </div>
</template>
<script>
import { searchResultApi, getSearchListApi } from '@/apis/index'
export default {
  data() {
    return {
      hot: [],
      loading: false,
      finished: false,
      value: '',
      SearchList: [],
    }
  },
  created() {
    this.loadHotList()
  },
  methods: {
    async loadHotList() {
      try {
        const res = await searchResultApi()
        console.log(this.hot)
        this.hot = res.data.result.hots
      } catch (e) {
        console.log('错误', e)
      }
    },

    async clickFn(val) {
      this.value = val

      try {
        const res = await getSearchListApi({
          keywords: this.value,
        })
        this.SearchList = res.data.result.songs
        console.log(this.SearchList)
      } catch (e) {
        console.log('错误', e)
      }
    },
    onLoad() {},
  },
}
</script>
