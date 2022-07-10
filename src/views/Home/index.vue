<template>
  <div class="home-container">
    <!-- 推荐歌单 -->
    <van-cell class="title" title="推荐歌单" />
    <van-grid :border="false" :column-num="3">
      <van-grid-item v-for="item in list" :key="item.id">
        <van-image width="100" height="100" :src="item.picUrl" />
        <p class="music-name van-multi-ellipsis--l2">{{ item.name }}</p>
      </van-grid-item>
    </van-grid>
    <!-- ---------------------------------------------------------------- -->
    <van-cell class="title" title="最佳匹配" />
    <van-cell
      v-for="item in newsongList"
      :key="item.id"
      :label="`${item.song.artists[0].name}-${item.name}`"
      :title="item.name"
    >
      <template>
        <van-icon color="#000" name="play-circle-o" size="28" />
      </template>
    </van-cell>
  </div>
</template>

<script>
import { getRecommendListApi, getNewSongListApi } from '@/apis/index'
export default {
  data() {
    return {
      list: [],
      newsongList: [],
    }
  },
  created() {
    this.getRecommendList()
    this.getNewsong()
  },
  methods: {
    async getRecommendList() {
      try {
        const res = await getRecommendListApi({
          limit: 6,
        })
        this.list = res.data.result
        console.log(this.list)
      } catch (e) {
        console.log('错误', e)
      }
    },
    async getNewsong() {
      try {
        const res = await getNewSongListApi()
        console.log(res)
        this.newsongList = res.data.result
      } catch (e) {
        console.log('错误', e)
      }
    },
  },
}
</script>

<style lang="less" scope>
.home-container {
  .title {
    background-color: #c71d24;
    color: #fff;
  }

  .music-name {
    font-size: 12px;
    text-align: left;
    line-height: 20px;
    width: 100%;
    padding: 0 5px;
    box-sizing: border-box;
    height: 37px;
  }

  /deep/.van-grid-item__content {
    padding: 10px 0px;
  }
  .van-cell__value {
    padding: 6px;
    flex: 0 0 30px;
  }
}
</style>
