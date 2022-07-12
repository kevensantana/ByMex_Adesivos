<template>
   <main>
      <div class="containerShopping">
         <h3>Compras</h3>
         <div class="card" v-for="adesivo in adesivos" :key="adesivo.id">
            <div class="image">
               <img :src="adesivo.image" alt="">
            </div>
            <div class="info">
               <h3 :value="adesivo.tipo">{{adesivo.tipo}}</h3>
               <p :value="adesivo.descricao">Descrição</p>
               <span>Valor: R$20 </span>
            </div>
            
            <div class="qtd">
               <span>2</span>
            </div>
         </div>
      </div>
      <div class="btn-acesso">
         <button >Acessar carrinho</button>
      </div>
   </main>
</template>


<script>
   import Card from './Card.vue';


  export default {
    name: "ShoppingInfo",
    data() {
        return {
            adesivos: null
        };
    },
   
   components: { Card },
    methods: {
        async getAdesivos() {
            const req = await fetch("http://localhost:3000/infoadesivos");
            const data = await req.json();
            this.adesivos = data.adesivos;
        }
    },
    mounted() {
        this.getAdesivos();
    },

}

</script>



<style scoped>

main{
   width: 25%;
   height: 78vh;
   position: fixed;
   right: 5%;
   top: 18%;
}

.containerShopping{
   padding: 2rem;
   height: 90%;
   border: 1px solid #ccc;
   border-radius: .5rem;
   z-index: 10;
   overflow-y: auto;
}

.card{
   display: flex;
   gap: 1rem;
   padding: 1rem 0;
   border-bottom: 1px solid #ccc;
}

.image img{
   width: 8rem;
   height: 6rem;
   background: #ccc;
   border-radius: .5rem;
}


.info{
   width: 65%;
   height: 7rem;
}

.info span{
 font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
   float: bottom;
}

.info h3{
   font-size: 1.6rem;
   font-weight: bold;
}

.info p{
  font-size: 1rem;
  max-height: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.qtd{
   padding-right: 1rem;
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