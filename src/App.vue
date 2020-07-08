<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/our-story">Our Story</router-link> |
      <router-link to="/locations">Locations</router-link>
    </div>
    <div id="order-online">
      Order Online
    </div>
    <router-view/>
  </div>
</template>

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
  background: #fff;
  color: #000;
  position: fixed;
  top: 22px;
  right: 15px;
  width: 150px;
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 10px;
}
</style>
