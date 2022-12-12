<template>
  <div>
    <Header/>
    <NavBar/>
<!--    <router-view/>-->
  </div>
</template>
<script>
import Header from '@/layout/Header.vue'
import NavBar from '@/layout/NavBar.vue'

export default {
  data() {
    return {}
  },
  components: {
    Header,
    NavBar

  }
}
</script>
<style>

</style>