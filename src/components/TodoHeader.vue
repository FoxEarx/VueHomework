<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="addTask"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: '',
    }
  },
  methods: {
    addTask() {
      this.$emit('addTask', this.task)
    },
  },
  computed: {
    isAll: {
      get() {
        return (
          this.$parent.list.length !== 0 &&
          this.$parent.list.every((item) => item.isDone)
        )
      },
      set(value) {
        // this.$parent.list.forEach((item) => item.isDone == value)
        this.$emit('qx', value)
      },
    },
  },
}
</script>
