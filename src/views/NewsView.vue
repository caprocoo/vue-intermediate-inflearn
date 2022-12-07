<template>
  <div>
    <p v-for="news in allNews" v-bind:key="news.id">
      <a v-bind:href="news.url">
        {{ news.title }}
      </a>
      <small>
        {{news.time_ago}} by
        <router-link v-bind:to="`user/${news.user}`">{{news.user}}</router-link>
      </small>
    </p>
  </div>
</template>
<script>
// import {getNewsList} from '../api/index.js'


export default {
  data() {
    return {
      // newsList :[],
    }
  },
  computed: {
    allNews() {
      return this.$store.state.newsList;
    }
  },
  created() {
    // getNewsList()
    //   .then(response =>{
    //     this.newsList = response.data;
    //   })
    //   .catch(error => {
    //     console.log('error', error)
    //   })
    this.$store.dispatch('GET_NEWS');
  }
}
</script>
<style>

</style>