<template>
  <div id="app">
    <!-- html에 적용할 때 케밥 형식으로 기입할 수 있다. -->
    <tool-bar></tool-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
export default {
  components:{
    ToolBar,
  }
}
</script>

<style>
  body{
    padding : 0;
    margin : 0;
  }
</style>
