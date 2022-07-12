<template>
   <div id="nav">
      <div class="containerNav">
         <span><router-link to="/">ByMex Adesivos</router-link></span>
            <ul>
               <li><router-link to="/">Home</router-link></li>
               <li><router-link to="/sobre">Sobre</router-link></li>
               <li><router-link to="/carrinho">Carrinho</router-link></li>
            </ul>
      </div>
   </div>
</template>


<script>
   export default {
      nome: 'NavBar',
   }
</script>


<style scoped>

.containerNav {
   width: 95%;
   margin: auto;
   padding: 3rem 4rem 2rem;

   display: flex;
   justify-content: space-between;
   align-items: center;
   font-size: 2rem;
   font-weight: bold;
}

ul {
   list-style: none;
   display: flex;
   gap: 3rem
}

li::after {
    content: "";
    display: block;
    border-bottom: 2px solid #272727;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

li:hover::after {
    transform: scaleX(1);
}

</style>>
