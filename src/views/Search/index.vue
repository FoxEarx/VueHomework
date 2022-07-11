<template>
  <div>
    <van-search
      shape="round"
      placeholder="请输入搜索关键词"
      v-model.trim="value"
      @input="changeFn"
    />
    <!-- 热门搜索 -->
    <template v-if="value.length == 0"
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
    <template v-else>
      <van-cell title="最佳匹配" />
      <van-list
        van-clearfix
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="false"
      >
        <!-- <van-cell
          v-for="item in SearchList"
          :key="item.id"
          :title="item.name"
          :label="`${item.ar[0].name}-${item.name}`"
        /> -->
        <SongItem
          v-for="item in SearchList"
          :key="item.id"
          :name="item.name"
          :id="item.id"
          :author="item.ar[0].name"
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>
<script>
import { searchResultApi, getSearchListApi } from '@/apis/index'
import SongItem from '@/components/SongItem'

export default {
  components: {
    SongItem,
  },
  data() {
    return {
      hot: [],
      loading: false,
      finished: false,
      value: '',
      SearchList: [],
      limit: 15,
      page: 1,
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

    clickFn(val) {
      this.page = 1
      this.value = val
      this.getSearchList(val)
    },
    async onLoad() {
      this.page++
      const res = await this.getSearchList()
      console.log(res)
      if (res.data.result.songs === undefined) {
        this.finished = true
        return
      }
      console.log('123', this.SearchList)
      this.loading = false
    },
    changeFn() {
      this.page = 1
      this.SearchList = []
      setTimeout(() => {
        this.getSearchList()
      }, 800)
    },
    async getSearchList() {
      if (this.value.length !== 0) {
        try {
          const res = await getSearchListApi({
            keywords: this.value,
            limit: this.limit,
            offset: (this.page - 1) * this.limit,
          })
          this.SearchList.push(...res.data.result.songs)
          this.$toast.success('获取列表成功')
          console.log(this.SearchList)
          return res
        } catch (e) {
          this.$toast.fail('获取列表失败')
          console.log('错误', e)
        }
      }
    },
  },
}
</script>
<style lang="less" scoped></style>
