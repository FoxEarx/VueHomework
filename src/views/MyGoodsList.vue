<template>
  <div>
    <MyTable :obj="list">
      <template v-slot:theader>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template v-slot:tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            v-focus
            v-if="scope.row.inputVisible"
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-model.trim="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="addFn(scope.row)"
            @keydown.esc="scope.row.inputVisible = false"
          />
          <button
            v-else
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 8px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
          <button
            type="button"
            class="btn btn-sm btn-success"
            v-quanxian="1"
            style="display: none"
          >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable'
export default {
  directives: {
    quanxian: {
      inserted(el, bink, vnode) {
        // console.log(bink)
        console.log(vnode.context.arr)
        if (vnode.context.arr.includes(bink.value)) {
          el.style.display = 'block'
          console.log(1)
        }
        // if (this.arr.includes(bink.expression)) {
        //   el.style.display = 'block'
        // }
      },
    },
  },
  data() {
    return {
      list: [],
      arr: [1, 2, 3],
    }
  },
  methods: {
    addFn(val) {
      if (val.inputValue == '') {
        return alert('请输入要添加的标签')
      }
      val.tags.push(val.inputValue)
    },
    delFn(id) {
      const index = this.list.findIndex((ele) => (ele.id = id))
      this.list.splice(index, 1)
      this.getList()
    },
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        this.list = res.data.data
        console.log(res)
      })
    },
  },
  created() {
    this.getList()
  },
  components: {
    MyTable,
  },
}
</script>

<style></style>
