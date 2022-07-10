<template>
   <header>
      <div class="containerHeader">
         <a href="#">ByMex Adesivos</a>
         <nav>
            <ul>
               <li><a href="#">Home</a> </li>
               <li><a href="#">Sobre</a> </li>
               <li><a href="#">Carrinho</a> </li>
            </ul>
         </nav>
      </div>
   </header>
</template>


<script>
   export default {
      nome: 'Header'
   }

</script>


<style scoped>

header{
   width: 100%;
   position: fixed;
   left: 0;
}

.containerHeader {
   width: 95%;
   margin: auto;
   padding: 4rem 4rem;


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
