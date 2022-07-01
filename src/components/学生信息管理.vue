<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" placeholder="请输入姓名" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" placeholder="请输入年龄" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="change ? md() : addFn()">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button @click="edi(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sj: 0,
      arr: [],
      name: '',
      age: '',
      sex: '男',
      change: false,
    }
  },
  methods: {
    addFn() {
      if (this.name == '' || this.age == '' || this.sex == '')
        return alert('Please enter')
      this.arr.push({
        id: this.arr.length + 1,
        name: this.name,
        age: this.age,
        sex: this.sex,
      })
      this.name = ''
      this.age = ''
      this.sex = ''
    },
    del(id) {
      const index = this.arr.findIndex((ele) => id == ele.id)
      this.arr.splice(index, 1)
    },
    edi(id) {
      const index = this.arr.findIndex((ele) => id == ele.id)
      this.name = this.arr[index].name
      this.age = this.arr[index].age
      this.sex = this.arr[index].sex
      this.change = true
      this.sj = id - 1
    },
    md() {
      this.arr[this.sj].name = this.name
      this.arr[this.sj].age = this.age
      this.arr[this.sj].sex = this.sex
      this.change = false
    },
  },
}
</script>
