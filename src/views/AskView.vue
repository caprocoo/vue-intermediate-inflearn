<template>
  <div>
<!--    <div v-for="ask in asks"  v-bind:key="ask">-->
<!--      {{ask.title}}-->
<!--    </div>-->

    <p v-for="ask in asks" v-bind:key="ask.id">
      <a :href="ask.url">
        {{ ask.title }}
      </a>
      <small>
        {{ask.time_ago}} by {{ask.user}}
      </small>
    </p>
  </div>

</template>
<script>
// import {getAskList} from '../api/index.js'
// import {mapState} from 'vuex';
import {mapGetters} from 'vuex';
export default {
  data(){
    return {
      // askList:[],
    }
  },
  computed:{
    // // 1) map helper 함수를 이용하여 html에서 사용
    // ...mapState({
    //   asks: state => state.askList
    // })

    // // 2) computed를 이용하여 store의 state 접근
    // ask(){
    //   return this.$store.state.askList;
    // }

    // 3) mapGetters를 통해 html에 사용
    ...mapGetters([
        'asks'
    ])
  },
  created() {
    // getAskList()
    //     .then(response=>{
    //       this.askList = response.data;
    //
    //     }).catch(error =>{
    //   console.log('error', error)
    // })

    // store에 있는 actions를 호출한다.
    // actions 호출 -> mutations 호출 -> state 값 들어감
    this.$store.dispatch('GET_ASK');
  }
}
</script>
<style>

</style>