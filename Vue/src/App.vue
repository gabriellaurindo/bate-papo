<template>
  <div id="app">
    <Cabecalho/>
    <BemVindo/>
    <BotaoRegistro/>
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
