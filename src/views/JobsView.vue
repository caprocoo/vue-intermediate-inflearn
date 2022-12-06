<template>
  <div>
<!--    <div v-for="job in jobs"  v-bind:key="job">-->
<!--      {{job.title}}-->
<!--    </div>-->
    <p v-for="job in jobs" v-bind:key="job.id">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>
        {{job.time_ago}}, {{job.domain}}
      </small>
    </p>
  </div>

</template>
<script>
import {mapState} from 'vuex';

export default {
  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      jobs:state => state.jobsList
    }),


  },
  created() {
    this.$store.dispatch('GET_JOBS');
  }
}
</script>
<style>

</style>