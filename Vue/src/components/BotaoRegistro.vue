<template>
  <div>
    <button class="register">Registrar</button>
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
    background-color:#41B883;
    color: white;
    padding: 1%;
    outline: none;
    border: none;
    border-radius: 5%;
    font-family: Crimson;
    font-size: 200%;
  }
  
  .register:hover{
    
    background-color: white;
    color: #41B883;
    font-size: 220%;
    transition: 1s;
    box-shadow: 5px 5px teal;
  }
</style>
