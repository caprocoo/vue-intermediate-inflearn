<template>
  <div>


    <ul class="ask-list">

      <li v-for="ask in asks" v-bind:key="ask.id" class="post">
        <div class="points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-title">
            <a :href="ask.url">
              {{ ask.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link v-bind:to="`item/${ask.id}`" class="link-text">{{ ask.user }}</router-link>
            , {{ ask.time_ago }}

          </small>

        </div>

      </li>
    </ul>


  </div>

</template>
<script>
// import {getAskList} from '../api/index.js'
// import {mapState} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
      // askList:[],
    }
  },
  computed: {
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
<style scoped>
.ask-list {
  margin: 0;
  padding: 0;
}

.post {
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.ask-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>