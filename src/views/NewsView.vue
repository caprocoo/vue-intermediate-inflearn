<template>
  <div>
    <div v-for="news in newsList" v-bind:key="news">
      {{ news.title }}
    </div>
  </div>
</template>
<script>
import {getNewsList} from '../api/index.js'

export default {
  data(){
    return {
      newsList :[],
    }
  },
  created() {
    let vm = this;
    getNewsList()
        .then(response =>{
          vm.newsList = response.data;
        })
        .catch(error => {
          console.log('error', error)
        })
  }
}
</script>
<style>

</style>