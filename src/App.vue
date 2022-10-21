<template>
  <div id="app">
    <!-- <Header /> -->
    <router-view />
  </div>
</template>

<script>
// import Header from "./components/header.vue";
export default {
  components: {
    // Header,
  },
};
</script>

<style>
body {
  background: #f7fafa !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<!-- https://cli.vuejs.org/guide/cli-service.html -->
