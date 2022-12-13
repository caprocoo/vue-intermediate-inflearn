<template>
  <div>
    <HeaderMain/>
    <div class ="wrap">
<!--      <SideBar class = "side"/>-->
      <router-view class="main"/>
    </div>

  </div>
</template>
<script>
import HeaderMain from '@/layout/HeaderMain.vue'
import SideBar from "@/layout/SideBar";

export default {
  data() {
    return {}
  },
  components: {
    HeaderMain,
    SideBar

  }
}
</script>
<style scoped>

.wrap{
  margin-top:250px;
  display: flex;

}


</style>