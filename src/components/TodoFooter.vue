<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>数量值 {{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: change == 'all' }"
          href="javascript:;"
          @click="zt('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: change == 'no' }"
          href="javascript:;"
          @click="zt('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: change == 'yes' }"
          href="javascript:;"
          @click="zt('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      change: 'all',
    }
  },
  props: {
    number: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    count() {
      return this.number.length
    },
  },
  methods: {
    clear() {
      this.$emit('clear')
    },
    zt(val) {
      this.change = val
      this.$emit('filter', val)
    },
  },
}
</script>
