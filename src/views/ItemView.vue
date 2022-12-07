<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${items.user}`">
            {{items.user}}
          </router-link>
          <div class="time">
            {{items.time_ago}}
          </div>
        </div>
      </div>
      <h2>{{items.title}}</h2>
    </section>
    <section>
      <div v-html="items.content">
      </div>
    </section>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {

  computed:{
    ...mapGetters(['items'])

  },
  created() {

    let itemId = this.$route.params.id;
    this.$store.dispatch('GET_ASK_ITEM', itemId);
  }
}
</script>
<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;

}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}
</style>