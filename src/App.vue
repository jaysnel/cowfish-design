<template class="paper-bg">
  <div id="app">
    
    <div class="mobile-nav-section-with-logo">
      <div>
        <img class="cowfish-logo" src="./assets/images/cowfishlogo.png" alt="">
      </div>
      <Slide right id="mobile-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/menus">Menu</router-link>
        <router-link to="/catering">Catering</router-link>
        <router-link to="/our-story">Our Story</router-link>
        <router-link to="/locations">Locations</router-link>
        <router-link to="/news">News</router-link> 
        <router-link to="/gallery">Gallery</router-link>
        <router-link to="/careers">Careers</router-link>
        <router-link to="/contact">Contact</router-link>
    </Slide>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/menus">Menu</router-link> |
      <router-link to="/catering">Catering</router-link> |
      <router-link to="/our-story">Our Story</router-link> |
      <router-link to="/locations">Locations</router-link> |
      <router-link to="/news">News</router-link>  |
      <router-link to="/gallery">Gallery</router-link> |
      <router-link to="/careers">Careers</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <a href="https://ordering.chownow.com/order/5967/locations" target="_blank" rel="noopener noreferrer">
      <div id="order-online">
        Order Online
      </div>
    </a>
    <router-view/>
    <Footer />
    <!-- <a id="floatingButton"><i class="fas fa-angle-up"></i></a> -->
  </div>
</template>

<script>
import Footer from './views/Footer'
import { Slide } from 'vue-burger-menu'

export default {
  components: {
    Footer,
    Slide
  }
}
</script>
<style>
.mobile-nav-section-with-logo {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #000;
}

.mobile-nav-section-with-logo > div {
  max-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
}

#nav,
#mobile-nav {
  padding: 30px;
  background: #000;
}

#nav a,
#mobile-nav a {
  font-weight: bold;
  color: #fff;
  font-family: var(--content-font);
}

.router-link-exact-active {
  color: var(--main-red) !important;
}

#mobile-nav .router-link-exact-active {
  color: var(--main-white) !important;
}

#mobile-nav .router-link-exact-active {
  background: var(--main-red);
}

#mobile-nav a:hover {
  color: var(--main-white);
  background: var(--main-red);
  text-decoration: none;
}

#mobile-nav .line-style {
  height: 5%;
}

.bm-menu {
  background: var(--main-black);
}

.bm-burger-bars {
  background-color: #fff;
}

/*Back to top button*/
/* #floatingButton {
  display: inline-block;
  background-color: rgba(172, 19, 28, 1);
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s, 
    opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}

#floatingButton i {
  font-size: 3rem;
  color: #fff;
}

#floatingButton:hover {
  cursor: pointer;
}
#floatingButton:active {
  background-color: #555;
}
#floatingButton.show {
  opacity: 1;
  visibility: visible;
} */


#order-online {
  background: var(--main-red);
  color: var(--main-white);
  position: fixed;
  bottom: 22px;
  right: 15px;
  width: 150px;
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 10px;
}

@media(max-width: 768px) {
  #app {
    padding: 0;
  }

  #nav {
    display: none;
  }
}

@media(min-width: 768px) {
  #mobile-nav,
  .mobile-nav-section-with-logo {
    display: none;
  }
}
</style>
