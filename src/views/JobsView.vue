<template>
  <div>
    <div v-for="job in jobList"  v-bind:key="job">
      {{job.title}}
    </div>
  </div>

</template>
<script>
import {getJobsList} from '../api/index.js'
export default {
  data(){
    return {
      jobList:[],
    }
  },
  created() {
    let vm = this;
    getJobsList()
        .then(response=>{
          vm.jobList = response.data;

        }).catch(error =>{
          console.log('error', error)
    })
  }
}
</script>
<style>

</style>