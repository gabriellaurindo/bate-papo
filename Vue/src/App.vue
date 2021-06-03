<template>
  <div id="app">
    <Cabecalho class="child"/>
    <BemVindo class="child"/>
  </div>
</template>

<script>
import Cabecalho from './components/Cabecalho'
import BemVindo from './components/BemVindo'

export default {
  name: 'App',
  components: {
    Cabecalho,
    BemVindo
  }
}
</script>

<style >

body,html{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

body{
  background-image: url("../public/img2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

</style>
