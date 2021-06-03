<template>
  <div class="main">
    <button class="register button">Registrar</button>
  </div>
</template>

<script>
export default {
    name:'BotaoRegistro',
}
//box-shadow: 60px -16px teal;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .register  {
    background-color:#643083;
    color: white;
    padding: 2%;
    outline: none;
    border: none;
    font-family:Cambria;
    font-size: 2rem;
    cursor: pointer;
  }
  
  .register:hover{
    
    background-color: white;
    color:black;
    font-size: 220%;
    transition: 0.5s;
  }
</style>
