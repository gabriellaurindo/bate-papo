<template>
  <div class="block">
    <div>
      <h1>Você está procurando por um Chat novo, bonito e seguro? Nós temos a solução!</h1>  
    </div>
    <div>
      <p>Chegou o Vubo, o seu novo chat de diversão, totalmente seguro e atualizado com as melhores tecnologias do mercado. Vem pro Vubo você também!</p>
    </div>
    <BotaoRegistro/>
  </div>
</template>

<script>
import BotaoRegistro from './BotaoRegistro'

export default {
    name:'BemVindo',
    components: {
    BotaoRegistro
  }
}
//box-shadow: 60px -16px teal;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .block{
    display: flex;
    flex-direction:column;
    width: 35vw;
    color: white;
    padding: 5%;
    text-align: left;

  }

  @media (max-width: 600px){
    .block{
      width: 85vw;
    }
  }
</style>
