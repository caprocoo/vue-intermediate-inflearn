<template>
  <div>
    {{hello.title}}

  </div>

</template>
<script>



export default {

  components: {

  },
  data() {
    return {}
  },
  computed: {
    hello(){
      return this.$store.state.memberStore.hello;
    }

  },
  created() {
    this.$store.dispatch('GET_HELLO');
  }
}
</script>
