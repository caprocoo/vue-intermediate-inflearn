<template>
  <div>

    <ul class = "news-list">
      <li v-for="news in allNews" v-bind:key="news.id" class="post">
        <!-- point 영역-->
        <div class="points">
          {{news.points}}
        </div>

        <!-- 기타 정보 영역-->
        <div>
          <p class="news-title">
            <a v-bind:href="news.url">
            {{ news.title }}
            </a>
          </p>
          <small class="link-text">
            by
            <router-link class="link-text" v-bind:to="`user/${news.user}`">{{news.user}}</router-link>
          </small>

        </div>

      </li>
    </ul>

  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  computed: {
    allNews() {
      return this.$store.state.newsList;
    }
  },
  created() {
    this.$store.dispatch('GET_NEWS');
  }
}
</script>
<style scoped>
.news-list{
  padding: 0;
  margin : 0;
}
.post{
  display: flex;
  align-items: center;
  list-style: none;
  border-bottom: 1px solid #eee;
}
.points{
  width:80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title{
  margin: 0;
}
.link-text{
  color: #828282;
}
</style>