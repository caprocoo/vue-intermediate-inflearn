<!--<template>-->
<!--  <div>-->
<!--    &lt;!&ndash;  header  &ndash;&gt;-->
<!--    <div class="bg-img">-->
<!--      <div class="container">-->

<!--      </div>-->

<!--    </div>-->
<!--    <div class="topnav" id = "navbar">-->
<!--      <router-link to="/main">MAIN</router-link>-->
<!--      <router-link to="/news">NEWS</router-link>-->
<!--      <router-link to="/ask">ASK</router-link>-->
<!--      <router-link to="/jobs">JOBS</router-link>-->
<!--    </div>-->

<!--&lt;!&ndash;    <div id="navbar">&ndash;&gt;-->
<!--&lt;!&ndash;      <a href="#home">Home</a>&ndash;&gt;-->
<!--&lt;!&ndash;      <a href="#news">News</a>&ndash;&gt;-->
<!--&lt;!&ndash;      <a href="#contact">Contact</a>&ndash;&gt;-->
<!--&lt;!&ndash;    </div>&ndash;&gt;-->

<!--    &lt;!&ndash;  header 안에 왼쪽 상단 햄버거 navigation bar  &ndash;&gt;-->
<!--    <div>-->
<!--      <v-navigation-drawer-->
<!--          v-model="drawer"-->
<!--          absolute-->
<!--          temporary-->
<!--      >-->
<!--        <v-list-->
<!--            nav-->
<!--            dense-->
<!--        >-->
<!--          <v-list-item-group-->
<!--              v-model="group"-->
<!--              active-class="deep-purple&#45;&#45;text text&#45;&#45;accent-4"-->
<!--          >-->
<!--            <v-list-item to="/">-->
<!--              <v-list-item-title>MAIN</v-list-item-title>-->
<!--            </v-list-item>-->

<!--            <v-list-item to="/news">-->
<!--              <v-list-item-title>NEWS</v-list-item-title>-->
<!--            </v-list-item>-->

<!--            <v-list-item to="/ask">-->
<!--              <v-list-item-title>ASK</v-list-item-title>-->
<!--            </v-list-item>-->

<!--            <v-list-item to="jobs">-->
<!--              <v-list-item-title>JOBS</v-list-item-title>-->
<!--            </v-list-item>-->
<!--          </v-list-item-group>-->
<!--        </v-list>-->
<!--      </v-navigation-drawer>-->
<!--    </div>-->
<!--  </div>-->

<!--</template>-->

<template>
  <v-card
      class="mx-auto overflow-hidden"
      height="400"
      width="344"
  >
    <v-system-bar color="deep-purple darken-3"></v-system-bar>

    <v-app-bar
        color="deep-purple accent-4"
        dark
        prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        bottom
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
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text>
      The navigation drawer will appear from the bottom on smaller size screens.
    </v-card-text>
  </v-card>
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
  updated() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
      let navbar = document.getElementsByClassName("topnav")[0];
    // Get the offset position of the navbar
      let sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("sticky")
        } else {
          navbar.classList.remove("sticky");
        }
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


.bg-img {
  /* The image used */
  background-image: url("@/images/bear.jpg");
  min-height: 300px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  /* Needed to position the navbar */
  position: relative;
}

/* Position the navbar container inside the image */
.container {
  position: absolute;
  margin: 20px;
  width: auto;
}

/* The navbar */
.topnav {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Page content */
.content {
  padding: 16px;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

/* Add some top padding to the page content to prevent sudden quick movement (as the navigation bar gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 60px;
}

</style>

