<template>
  <div>
    <p> name : {{userInfo.id}}</p>
    <p> karma : {{userInfo.karma}}</p>
    <p> created : {{userInfo.created}}</p>
  </div>
</template>
<script>


export default {
  computed:{
    userInfo(){
      return this.$store.state.userDatail;
    }

  },
  created(){
    let userId = this.$route.params.id;
    this.$store.dispatch('GET_USER_DETAIL', userId);
  }
}
</script>
<style>

</style>