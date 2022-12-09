<template>
  <div class="container">
    <div>
      <h1>{{ member.title }} MEMBER </h1>
      <p>회원 기능</p>
      <p>
        <a href="/member/join">회원가입</a> |
        <a href="/member/list">회원 목록</a>

      </p>
    </div>
  </div>

</template>
<script>


export default {

  components: {},
  data() {
    return {}
  },
  computed: {
    member() {
      return this.$store.state.memberStore.member;
    }

  },
  created() {
    this.$store.dispatch('GET_MEMBER');
  }
}
</script>
