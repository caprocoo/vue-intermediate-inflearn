<template>
  <div>
    <!--  header  -->
    <div id="app" class="first">
      <v-app id="inspire" class="header">
        <v-app-bar
            absolute
            color="#6A76AB"
            dark
            shrink-on-scroll
            prominent
            src="https://picsum.photos/1920/1080?random"
            fade-img-on-scroll
            scroll-target="scroller"
        >
          <template v-slot:img="{ props }">
            <v-img
                v-bind="props"
                gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
            ></v-img>
          </template>

          <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

          <v-app-bar-title> OB</v-app-bar-title>

          <v-spacer></v-spacer>


          <!--          <v-btn icon>-->
          <!--            <v-icon>mdi-magnify</v-icon>-->
          <!--          </v-btn>-->

          <!--          <v-btn icon>-->
          <!--            <v-icon>mdi-heart</v-icon>-->
          <!--          </v-btn>-->

          <!--          <v-btn icon>-->
          <!--            <v-icon>mdi-dots-vertical</v-icon>-->
          <!--          </v-btn>-->

          <template v-slot:extension>
            <v-tabs align-with-title >
              <v-tab to="/main">MAIN</v-tab>
              <v-tab to="/news">NEWS</v-tab>
              <v-tab to="/ask">ASK</v-tab>
              <v-tab to="jobs">JOBS</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
      </v-app>
    </div>

    <!--  header 안에 왼쪽 상단 햄버거 navigation bar  -->
    <div>
      <v-navigation-drawer
          v-model="drawer"
          absolute
          temporary
      >
        <v-list
            nav
            dense
        >
          <v-list-item-group
              v-model="group"
              active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/">
              <v-list-item-title>MAIN</v-list-item-title>
            </v-list-item>

            <v-list-item to="/news">
              <v-list-item-title>NEWS</v-list-item-title>
            </v-list-item>

            <v-list-item to="/ask">
              <v-list-item-title>ASK</v-list-item-title>
            </v-list-item>

            <v-list-item to="jobs">
              <v-list-item-title>JOBS</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      drawer: false,
      group: null,
    }
  },
  watch: {
    group() {
      this.drawer = false
    }

  },
  methods: {
    goMain() {
      if (this.$route.path !== '/main') this.$router.push('/main');
      // this.$router.push({path:'/'});
    },
    goNews() {
      this.$router.push({path: '/news'});
    },
    goJobs() {
      this.$router.push({path: '/jobs'});
    },
    goAsk() {
      this.$router.push({path: '/ask'});
    }
  },
  components: {}

}
</script>
<style scoped>
.first {
  height: auto;
  width: 100%;
  /*padding-bottom: 230px;*/
}



.header {
  position: sticky;
  height: 50px;
  border-bottom: 1px solid #ebebeb;
  visibility: visible;


}


</style>

