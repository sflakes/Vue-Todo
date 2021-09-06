<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-align: center;
}
#app {
  background: #1f1c2c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #928dab,
    #1f1c2c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #928dab,
    #1f1c2c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  background-repeat: no-repeat;
  height: 100vh;
}
</style>
