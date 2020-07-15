<template class="paper-bg">
  <div id="app">
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

export default {
  components: {
    Footer
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

#nav {
  padding: 30px;
  background: #000;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
</style>
