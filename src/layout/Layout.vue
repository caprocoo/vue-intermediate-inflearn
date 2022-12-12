<template>
  <div>
    <Header/>
    <div >
      <router-view />
    </div>


  </div>
</template>
<script>
import Header from '@/layout/HeaderNav.vue'
export default {
  data() {
    return {}
  },
  components: {
    Header,


  }
}
</script>
<style>
</style>