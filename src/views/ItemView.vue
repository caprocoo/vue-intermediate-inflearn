<template>
  <div>
    <p>id : {{askItem.id}}</p>
    <p>user : {{askItem.user}}</p>
    <p>title : {{askItem.title}}</p>
    <p>comments_count : {{askItem.comments_count}}</p>
  </div>
</template>
<script>
export default {

  computed:{
    askItem(){
      return this.$store.state.askItem;
    }

  },
  created() {

    let itemId = this.$route.params.id;
    this.$store.dispatch('GET_ASK_ITEM', itemId);
  }
}
</script>
<style>

</style>