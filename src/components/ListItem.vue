<template>
  <div>
    <ul class="news-list">
      <li
        v-for="items in listItems"
        :key="items.id"
        class="post"
      >
        <!-- point 영역-->
        <div class="points">
          {{ items.points || 0 }}
        </div>

        <!-- 기타 정보 영역-->
        <div>
          <p class="news-title">
            <template v-if="items.domain">
              <a :href="items.url">
                {{ items.title }}
              </a>
            </template>
            <template v-else>
              <router-link
                :to="`item/${items.id}`"
                class="link-text"
              >
                {{ items.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            by
            <router-link
              v-if="items.user"
              class="link-text"
              :to="`user/${items.user}`"
            >{{ items.user }}
            </router-link>
            <a
              v-else
              :href="items.url"
            >{{ items.domain }}</a>
            {{ items.time_ago }}
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  computed: {

    listItems() {
      return this.$store.state.list;


    }
  },

}
</script>
<style scoped>
.news-list {
  padding: 0;
  margin: 0;
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

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}

</style>