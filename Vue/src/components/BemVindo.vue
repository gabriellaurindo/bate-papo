<template>
  <div class="block">
    <div>
      <h2>Você está procurando por um Chat novo, bonito e seguro? Nós temos a solução!</h2>  
    </div>
    <div>
      <p>Chegou o Vubo, o seu novo chat de diversão, totalmente seguro e atualizado com as melhores tecnologias do mercado. Vem pro Vubo você também!</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'BemVindo',
}
//box-shadow: 60px -16px teal;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Open+Sans:wght@800&display=swap');

  .block{
    display: flex;
    flex-direction:column;
    list-style: none;
    width: 40%;
  }

  .block div{
     flex: 1;
  }
</style>
