<template class="paper-bg">
  <div id="app">
    
    <div>
      <Slide right id="mobile-nav">
        <router-link to="/">Home</router-link>
        <router-link to="/menus">Menus</router-link>
        <router-link to="/our-story">Our Story</router-link>
        <router-link to="/locations">Locations</router-link> 
        <router-link to="/gallery">Gallery</router-link>
    </Slide>
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/menus">Menus</router-link> |
      <router-link to="/our-story">Our Story</router-link> |
      <router-link to="/locations">Locations</router-link> |
      <router-link to="/gallery">Gallery</router-link>
    </div>
    <a href="https://ordering.chownow.com/order/5967/locations" target="_blank" rel="noopener noreferrer">
      <div id="order-online">
        Order Online
      </div>
    </a>
    <router-view/>
    <Footer />
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

.bm-menu {
  background: var(--main-black);
}

.bm-burger-bars {
  background: #fff;
}

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
  #nav {
    display: none;
  }
}

@media(min-width: 768px) {
  #mobile-nav {
    display: none;
  }
}
</style>
