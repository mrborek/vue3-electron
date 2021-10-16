<template>
  <div class="container mx-auto">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto">
    <div id="nav">
      <router-link to="/">HomeScreen</router-link> |
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  margin-top: 60px;
}
</style>
