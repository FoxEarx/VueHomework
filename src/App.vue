<template>
  <div>
    <TodoHeader @addTask="addTask" @qx="qxFn"></TodoHeader>
    <TodoMain :list="showlist" @del="delFn"></TodoMain>
    <TodoFooter
      :number="showlist"
      @filter="changesel"
      @clear="clearFn"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')),
      sel: 'all',
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    clearFn() {
      this.list = this.list.filter((item) => !item.isDone)
    },
    qxFn(val) {
      this.list.forEach((item) => (item.isDone = val))
    },
    changesel(val) {
      this.sel = val
    },
    addTask(val) {
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id - 1
        : 100
      this.list.push({
        name: val,
        isDone: false,
        id,
      })
    },
    delFn(val) {
      const index = this.list.findIndex((ele) => ele.id == val)
      this.list.splice(index, 1)
    },
  },
  computed: {
    count() {
      return this.list.length
    },
    showlist() {
      if (this.sel == 'yes') {
        return this.list.filter((ele) => ele.isDone)
      } else if (this.sel == 'no') {
        return this.list.filter((ele) => !ele.isDone)
      } else {
        return this.list
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('list', JSON.stringify(this.list))
      },
      immediate: true,
    },
  },
}
</script>

<style></style>
