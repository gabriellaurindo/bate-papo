<template>
  <div id="app">
    <Cabecalho class="child"/>
    <BemVindo class="child"/>
    <BotaoRegistro class="child"/>
  </div>
</template>

<script>
import BotaoRegistro from './components/BotaoRegistro'
import Cabecalho from './components/Cabecalho'
import BemVindo from './components/BemVindo'

export default {
  name: 'App',
  components: {
    BotaoRegistro,
    Cabecalho,
    BemVindo
  }
}
</script>

<style >

body{
  background-image: url("../public/img2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
