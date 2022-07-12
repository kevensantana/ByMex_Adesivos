<template>
   <div v-for="adesivo in adesivos" :key="adesivo.id" class="shopping">
       <div class="containerShopping">
         <h3>Compras</h3>
         <div class="card" v-for="opc in opcionais" :key="opc.id">
            <div  class="image">
               <img v-if="adesivo.id == opc" :src="adesivo.image" alt="">
            </div>
            <div class="info">
               <h3 v-if="adesivo.id == opc" :value="adesivo.title">{{adesivo.title}}</h3>
               <p  v-if="adesivo.id == opc" :value="adesivo.descricao">{{adesivo.descricao}}</p>
               <span v-if="adesivo.id == opc" :value="adesivo.valor">{{ adesivo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</span>
            </div>   
         </div>
            <div class="calcTotal">
              <span >Total: </span>
            </div>
      </div>
      <div class="btn-acesso">
         <router-link to="/carrinho">Acessar carrinho</router-link>
      </div>
   </div>
</template>


<script>
   import Card from './Card.vue';


export default {
  name: "ShoppingInfo",
  data() {
      return {
          adesivos: null, 
          compras: null,
          opcionais: null,
      };
  },
   
  components: { Card },
  methods: {
      async getAdesivos() {
          const req = await fetch("http://localhost:3000/infoadesivos");
          const data = await req.json();
          this.adesivos = data.adesivos;
      },
      async getCompras() {
        const req = await fetch("http://localhost:3000/compras");
          const data = await req.json();
          this.opcionais = data.opcionais;
          this.compras = data.compras;

          console.log(this.opcionais)


    },
  },
  mounted() {
      this.getAdesivos();
      this.getCompras();
  },

}

</script>



<style scoped>

.shopping{
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
   /* overflow-y: auto; */

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

.calcTotal{
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-weight: bold;
  color: #28a745;
}

.qtd{
   padding-right: 1rem;
}




.btn-acesso{
   width: 100%;
   height: 4rem;
   margin-top: 1rem;

   display: flex;
   justify-content: center;
   align-items: center;
   
   border: none;
   border-radius: .5rem;

   font-size: 1.8rem;
   font-weight: bold;

   cursor: pointer; 
   background: #bdbdbd;
}

.btn-acesso:hover{
   background: #ccc;
}


</style>