<template>
  <div>
    <v-app-bar
        app
        color="white"
        flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
            class="mr-10"
            color="grey darken-1"
            size="32"
        ></v-avatar>

        <v-btn
            depressed
            @click="goMain()"
        >
          Main
        </v-btn>
        <v-btn
            depressed
            @click="goNews()"
        >
          News
        </v-btn>
        <v-btn
            depressed
            @click="goAsk()"
        >
          Ask
        </v-btn>
        <v-btn
            depressed
            @click="goJobs()"
        >
          Jobs
        </v-btn>
        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

  </div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    goMain() {
      if (this.$route.path !== '/main') this.$router.push('/main');
      // this.$router.push({path:'/'});
    },
    goNews(){
      this.$router.push({path:'/news'});
    },
    goJobs(){
      this.$router.push({path:'/jobs'});
    },
    goAsk(){
      this.$router.push({path:'/ask'});
    }
  },
  components: {}

}
</script>

