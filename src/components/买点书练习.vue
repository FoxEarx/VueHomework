<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="item in arr" :key="item.id">
        {{ item.name }} <button @click="add(item.id)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="item in arr" :key="item.id">
        <th>{{ item.id }}</th>
        <th>{{ item.name }}</th>
        <th>{{ item.price }}</th>
        <th>{{ item.count }}</th>
        <th>{{ item.zj }}</th>
      </tr>
    </table>
    <p>总价格为:{{ hj }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 1,
          name: '水浒传',
          price: 107,
          count: 0,
          zj: 0,
        },
        {
          id: 2,
          name: '西游记',
          price: 192,
          count: 0,
          zj: 0,
        },
        {
          id: 3,
          name: '三国演义',
          price: 219,
          count: 0,
          zj: 0,
        },
        {
          id: 4,
          name: '红楼梦',
          price: 178,
          count: 0,
          zj: 0,
        },
      ],
      hj: 0,
    }
  },
  methods: {
    add(id) {
      const index = this.arr.findIndex((ele) => id == ele.id)
      this.arr[index].count = this.arr[index].count + 1
      this.arr[index].zj = this.arr[index].count * this.arr[index].price
      this.hj = this.hj + this.arr[index].price
    },
  },
}
</script>
