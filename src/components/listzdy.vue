<template>
  <div>
    <table border="1">
      <thead>
        <th>
          <td>序号</td>
          <td>姓名</td>
          <td>年龄</td>
          <td>图片</td>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in obj" :key="item.id">
          <slot name="id">{{item.id}}</slot>
          <slot name="name">{{item.name}}</slot>
          <slot name="age">{{item.age}}</slot>
          <slot name="img" :row="item"><a href="item.headImgUrl">{{item.headImgUrl}}</a></slot>
         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
props:{
    obj:{
        type:Array,
        default:()=>[]
    }
}
}
</script>

<style>
</style>