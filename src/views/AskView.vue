<template>
  <div>
    <div v-for="ask in askList"  v-bind:key="ask">
      {{ask.title}}
    </div>
  </div>

</template>
<script>
import {getAskList} from '../api/index.js'
export default {
  data(){
    return {
      askList:[],
    }
  },
  created() {
    let vm = this;
    getAskList()
        .then(response=>{
          vm.askList = response.data;

        }).catch(error =>{
      console.log('error', error)
    })
  }
}
</script>
<style>

</style>