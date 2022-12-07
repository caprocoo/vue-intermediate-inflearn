<template>
  <div>
    <ul class = "job-list">
      <li v-for="job in jobs" v-bind:key="job.id" class = "post">
        <div class = "points">
          {{job.comments_count}}
        </div>

        <div>
          <p class="job-title">
            <a :href="job.url">
              {{ job.title }}
            </a>
          </p>

        <small class = "link-text">
          by
          {{job.domain}}, {{job.time_ago}}
        </small>
        </div>
      </li>
    </ul>

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
<style scoped>

.job-list{
  margin: 0;
  padding:0;
}
.job-title{
  margin: 0;
}
.post{
  display:flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.link-text{
  color: #828282;

}
</style>