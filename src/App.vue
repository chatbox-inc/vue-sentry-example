<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world :msg="msg" :desc="desc"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      msg: "Welcome to Your Vue.js App",
      desc: "Lets try ! Owesome functions here !"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
