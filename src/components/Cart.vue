<template>
   <main>
      <div class="containerCart">
         <div class="cards">
            <div class="image">
               <img src="" alt="">
            </div>
            <div class="info">
               <h3>Nome do produto</h3>
               <span>Valor: R$20 </span>
               <p>Descrição</p>
            </div>
           
         </div>
      </div>
      <div class="btn-acesso">
         <button >Acessar carrinho</button>
      </div>
   </main>
</template>


<script>
    export default{
        name: 'Cart'
    }

</script>



<style scoped>

main{
   width: calc(100% - 74%);
   height: 78vh;
   position: fixed;
   right: 5%;
}

.containerCart{
   padding: 2rem;
   height: 90%;
   border: 1px solid #ccc;
   border-radius: .5rem;
}

.cards{
   display: flex;
   gap: 1rem;
   margin-bottom: 2rem;
}

.image{
   width: 7rem;
   height: 7rem;
   background: #ccc;
   border-radius: .5rem;
}

.info span{
   font-size: 1.4rem;

}



.btn-acesso {
   
   display: flex;
   justify-content: center;
   align-items: flex-end;
   padding-top: 1rem ;
}

.btn-acesso button{
   width: 100%;
   height: 4rem;
   
   border: none;
   border-radius: .5rem;

   font-size: 1.8rem;
   font-weight: bold;

   cursor: pointer;
}

.btn-acesso button:hover{
   background: #ccc;
}


</style>