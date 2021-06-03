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
  
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Open+Sans:wght@800&display=swap');

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
