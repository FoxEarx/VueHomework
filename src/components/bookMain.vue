<template>
  <div>
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
          <td><a href="">删除</a> <a href="">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scop></style>
