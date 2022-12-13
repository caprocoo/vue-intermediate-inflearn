<template>
  <div class="main">
    <div>
      asdasdasd
    </div>
  </div>
</template>
<script>
import HeaderMain from '@/layout/HeaderMain.vue'
let now = new Date();
let firstDate = new Date('2021-11-19');
let nowDate = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
export default {
  data() {
    return {
      loveDate: '',
    }
  },

  methods: {
    // d1에서 d2를 뺀 총 일자 만드는 함수
    getDateDiff(d1, d2) {
      let date1 = new Date(d1);
      let date2 = new Date(d2);
      let diffDate = date1.getTime() - date2.getTime();
      return Math.abs(diffDate / (1000 * 60 * 60 * 24));
    }
  },
  components: {
    HeaderMain
  },
  mounted() {


    this.loveDate = this.getDateDiff(nowDate, firstDate) + 1;


  }

}
</script>
<style>


</style>