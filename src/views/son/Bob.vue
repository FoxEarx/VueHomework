<template>
  <div>
    <h1>Bob</h1>
    <button>edit</button>
    <div>
      <ul>
        <li>
          <router-link to="/contasts/bob/blog">blog</router-link>
        </li>
        <li><router-link to="/contasts/bob/fax">fax</router-link></li>
      </ul>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
