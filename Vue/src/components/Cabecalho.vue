<template>
  <div>
    <nav class="menu">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    name:'Cabecalho',
}
//box-shadow: 60px -16px teal;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital@1&family=Open+Sans:wght@800&display=swap');

  .menu{
    padding: 15px;
  }

  .menu ul{
    display: flex;
    flex-direction:row;
    list-style: none;
    padding: 0;
  }

  .menu ul li {
     flex: 1;
     width: 100%;
     height: 100%;
  }

  .menu ul li a{
    text-decoration: none;
    color: rgb(209, 209, 209);
    font-family: Crimson;
  }

  .menu ul li a:hover{
    color: rgb(255, 255, 255);
    transition-duration: 1s;
  }

</style>
