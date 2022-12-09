<template>
  <div class = "header">
    <router-link to="/main">Main</router-link> |
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link> |
    <router-link to="/member">Member</router-link>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.header{
  color : white;
  background-color: #8C8CFF;
  display : flex;
  padding : 8px;

}
.header .router-link-exact-active {
  color : #35495e;

}
.header a {
  color : white;

}
</style>