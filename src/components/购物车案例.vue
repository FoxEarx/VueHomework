<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记/万</th>
        <th>操作</th>
        <th>时间</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.state" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="redFn(item.id, 1)">-</span
          ><input type="text" v-model="item.num" id="ipt" /><span
            @click="addFn(item.id, 1)"
            >+</span
          >
        </td>
        <td>{{ item.price * item.num }}</td>
        <td><button @click="delFn(item.id)">删除</button></td>
        <td>{{ item.time }}</td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="del">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数 {{ allnum }}</p>
      <p>总价{{ allPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '奔驰',
          num: 0,
          time: '2020-08-01',
          price: 60,
          state: false,
        },
        {
          id: 2,
          name: '宝马',
          num: 0,
          time: '2020-08-02',
          price: 100,
          state: false,
        },
        {
          id: 3,
          name: '奥迪',
          num: 0,
          time: '2020-08-03',
          price: 30,
          state: false,
        },
      ],
    }
  },
  methods: {
    del() {
      this.list = this.list.filter((ele) => {
        return ele.state === false
      })
    },
    delFn(id) {
      const index = this.list.findIndex((ele) => ele.id == id)
      this.list.splice(index, 1)
    },
    delAll() {
      this.list = []
    },
    addFn(id, val) {
      const index = this.list.findIndex((ele) => ele.id == id)
      this.list[index].num = this.list[index].num + val
    },
    redFn(id, val) {
      const index = this.list.findIndex((ele) => ele.id == id)

      if (this.list[index].num > 0) {
        this.list[index].num = this.list[index].num - val
      }
    },
  },
  computed: {
    isAll: {
      get() {
        return this.list.every((item) => item.state === true)
      },
      set(val) {
        this.list.forEach((item) => (item.state = val))
      },
    },
    allnum() {
      const arr1 = this.list.filter((ele) => {
        return ele.state === true
      })
      return arr1.reduce((sum, obj) => (sum = sum + obj.num), 0)
    },
    allPrice() {
      const arr1 = this.list.filter((ele) => {
        return ele.state === true
      })
      return arr1.reduce((sum, obj) => (sum = sum + obj.price * obj.num), 0)
    },
  },
}
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
#ipt {
  width: 30px;
}
</style>
