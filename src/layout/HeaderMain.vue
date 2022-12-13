<template>
  <div>

    <div id="navbar">
      <a href="/main" id="logo">CompanyLogo</a>
      <div id="nav">
        <router-link class="active" to="/main">MAIN</router-link>
        <router-link class="active" to="/news">NEWS</router-link>
        <router-link class="active" to="/ask">ASK</router-link>
        <!--        -->
        <!--        <div class="dropdown">-->
        <!--          <button class="dropbtn">DROPDOWN-->
        <!--            <i class="fa fa-caret-down"></i>-->
        <!--          </button>-->
        <!--          <div class="dropdown-content">-->
        <!--            <a href="#">content1</a>-->
        <!--            <a href="#">content2</a>-->
        <!--            <a href="#">content3</a>-->
        <!--          </div>-->
        <!--        </div>-->
        <router-link class="active" to="/jobs">JOBS</router-link>


      </div>
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
  mounted() {
    // header Shrink Navigation Menu on Scroll - w3schools
    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "50px 10px";
        document.getElementById("logo").style.fontSize = "25px";
      } else {
        document.getElementById("navbar").style.padding = "100px 10px";
        document.getElementById("logo").style.fontSize = "35px";
      }
    }
  },
  updated() {

  }
}
</script>

<style scoped>
/* Create a sticky/fixed navbar */
#navbar {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 100px 10px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.4s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  top: 0; /* At the top */
  z-index: 99;
  background-image: url("@/images/bear.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}

#navbar #nav {
  margin-right: 5%;

}

/* Style the navbar links */
#navbar a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;

}

/* Style the logo */
#navbar #logo {
  font-size: 35px;
  font-weight: bold;
  transition: 0.4s;

}

/* Links on mouse-over */

#navbar .active:hover, .nav a:hover, .dropdown:hover .dropbtn {
  color: black;
  background-color: #ddd;
}

/* Style the active/current link */
#navbar a.active {
  color: #dddddd;
}

/* Display some links to the right */
#nav {
  float: right;
}

/* Add responsiveness - on screens less than 580px wide, display the navbar vertically instead of horizontally */
@media screen and (max-width: 580px) {
  #navbar {
    padding: 20px 10px !important; /* Use !important to make sure that JavaScript doesn't override the padding on small screens */
  }

  #navbar a {
    float: none;
    /*display: block;*/
    text-align: left;
  }

}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 17px;
  border: none;
  outline: none;
  color: #dddddd;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: center;
  line-height: 1.5em;
}


.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
  transition-duration: 0.5s;
}

nav .router-link-exact-active {
  background-color: #828282;
}

</style>