<template>
  <div class="box">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in obj" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <a href="javaScript:;" @click="delFn(item.id)">删除</a>
            <a href="javaScript:;" @click="details(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="details" v-show="isShow">
      <table class="table table-bordered">
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
        </tr>
        <tr>
          <td>{{ xqx.id }}</td>
          <td>{{ xqx.bookname }}</td>
          <td>{{ xqx.author }}</td>
          <td>{{ xqx.publisher }}</td>
        </tr>
      </table>
      <button type="button" class="btn btn-warning" @click="gb">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xqx: [],
      isShow: false,
    }
  },
  methods: {
    gb() {
      this.isShow = false
    },
    details(id) {
      this.isShow = true
      this.xqx = this.obj.filter((ele) => ele.id == id)
      this.xqx = this.xqx[0]
    },
    delFn(id) {
      this.$axios({
        method: 'GET',
        url: '/api/delbook',
        params: {
          id: id,
        },
      }).then((res) => {
        if (res.data.status !== 200) {
          return alert(res.data.msg)
        }
        alert(res.data.msg)
        this.$emit('del')
      })
    },
  },
  props: {
    obj: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scop>
.box {
  position: relative;
}
.details {
  background-color: #ebe9e7;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
}
</style>
