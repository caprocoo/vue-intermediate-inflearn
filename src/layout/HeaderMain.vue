<template>
  <div>

    <div id="navbar">


      <a href="/main" id="logo">CompanyLogo</a>
      <div id="nav">
        <div id = "main-drawer">
          <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
          <label for="drawer-toggle" id="drawer-toggle-label"></label>
          <nav id="drawer">
            <ul>
              <li><a href="/main">MAIN</a></li>
              <li>
              <div class="subnav">
                <button class="subnavbtn fas fa-caret-down ">SUB </button>
<!--                  <i class="fas fa-caret-down"></i>-->
              </div>
              </li>
              <li><a href="/news">NEWS</a></li>
              <li><a href="/ask">ASK</a></li>
              <li><a href="/jobs">JOBS</a></li>
            </ul>
          </nav>
        </div>
        <router-link class="active" to="/main">MAIN</router-link>
        <router-link class="active" to="/news">NEWS</router-link>
        <router-link class="active" to="/ask">ASK</router-link>
        <router-link class="active" to="/jobs">JOBS</router-link>


      </div>
    </div>


  </div>
</template>

<script>


export default {
  data() {
    return {
      //drawer
      drawer: false,
      group: null,
      //dropdown
      isDropped:false,
    }
  },
  watch: {
    //drawer
    group() {
      this.drawer = false
    }

  },
  mounted() {
    // header Shrink Navigation Menu on Scroll - w3schools
    window.onscroll = function () {
      scrollFunction()
    };
    //header scrollFunction
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "50px 10px";
        document.getElementById("logo").style.fontSize = "25px";
      } else {
        document.getElementById("navbar").style.padding = "100px 10px";
        document.getElementById("logo").style.fontSize = "35px";
      }
    };


  },
  methods:{
    dropIt() {
      this.isDropped = !this.isDropped
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
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.5s ease;
  z-index: 1;

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

#navbar .active:hover, .nav a:hover {
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


#nav .router-link-exact-active {
  background-color: #828282;
}

/*햄버거 css*/

/* gets the actual input out of the way;
we're going to style the label instead */

#drawer-toggle {
  position: absolute;
  opacity: 0;
}

#drawer-toggle-label {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  left: 0px;
  height: 50px;
  width: 50px;
  display: block;
  position: fixed;
  background: rgba(255, 255, 255, .0);
  z-index: 1;
}

/* adds our "hamburger" menu icon */

#drawer-toggle-label:before {
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  width: 24px;
  background: #8d8d8d;
  left: 13px;
  top: 18px;
  box-shadow: 0 6px 0 #8d8d8d, 0 12px 0 #8d8d8d;
}

header {
  width: 100%;
  position: fixed;
  left: 0px;
  background: #efefef;
  padding: 10px 10px 10px 50px;
  font-size: 30px;
  line-height: 30px;
  z-index: 0;
}

/* drawer menu pane - note the 0px width */
/* drawer 시작 */
#main-drawer {
  top: 0;
  left: 0;

}

#drawer {
  position: fixed;
  top: 0;
  left: -300px;
  height: 100%;
  width: 300px;
  background: #2f2f2f;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 20px;
  -webkit-overflow-scrolling: touch;
}

/* actual page content pane */

#page-content {
  margin-left: 0px;
  margin-top: 50px;
  width: 100%;
  height: calc(100% - 50px);
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: 20px;
}

/* checked styles (menu open state) */

#drawer-toggle:checked ~ #drawer-toggle-label {
  height: 100%;
  width: calc(100% - 300px);
  background: rgba(255, 255, 255, .8);
}

#drawer-toggle:checked ~ #drawer-toggle-label,
#drawer-toggle:checked ~ header {
  left: 300px;
}

#drawer-toggle:checked ~ #drawer {
  left: 0px;

}

#drawer-toggle:checked ~ #page-content {
  margin-left: 300px;
}

/* Menu item styles */

#drawer ul {
  list-style-type: none;
  margin:0;
  padding:0;
  width: 60px;
}

#drawer ul a {
  display: block;
  padding: 10px;
  color: #c7c7c7;
  text-decoration: none;
}

#drawer ul a:hover {
  color: white;
}

/* Responsive MQ */

@media all and (max-width: 350px) {

  #drawer-toggle:checked ~ #drawer-toggle-label {
    height: 100%;
    width: 50px;
  }

  #drawer-toggle:checked ~ #drawer-toggle-label,
  #drawer-toggle:checked ~ header {
    left: calc(100% - 50px);
  }

  #drawer-toggle:checked ~ #drawer {
    width: calc(100% - 50px);
    padding: 20px;
  }

  #drawer-toggle:checked ~ #page-content {
    margin-left: calc(100% - 50px);
  }
}
/* drawer 끝 */

#navbar #nav #main-drawer #drawer .subnav {
  font-size: 18px;
  border: none;
  outline: none;
  color: white;
  margin: 0;
}

.subnav .subnavbtn{
  padding:10px;
  width:25px;
}

.button-examples i {
  display: flex;
  margin: 0 auto;
}

</style>