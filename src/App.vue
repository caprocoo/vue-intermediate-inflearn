<template>
  <div id="app">

    <!-- html에 적용할 때 케밥 형식으로 기입할 수 있다. -->
<!--    <tool-bar></tool-bar>-->

    <transition name="page">
      <router-view class="scroller"/>
    </transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>


<script>
// import ToolBar from './components/ToolBar.vue'
import Spinner from './components/Spinner.vue'
import bus from './utils/bus.js'

export default {
  components: {
    // ToolBar,
    Spinner
  },
  data(){
    return{
      loadingStatus:false,
    };
  },

  methods:{
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    }

  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy() {
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  }
};
</script>

<style scoped>
body {
  padding: 0;
  margin: 0;

}
.routerView{
  height: auto;
}
/* Router Transition */
/* 페이지 변화 시 action - 부드럽게 모션 주기 */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
/* a태그 중에 밑줄 제거 */
a {
  text-decoration: none;
}
/* a태그에 마우스 hover시 색 변화 및 underline 추가 */
a:hover {
  color: #42b883;
  text-decoration: underline;
}
/* ToolBar의 선택한 분류에 따라 밑줄로 강조 */
a.router-link-exact-active {
  text-decoration: underline;
}


</style>
