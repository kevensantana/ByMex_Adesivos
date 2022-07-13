<template>
    <div class="cart">
     
      <FormCompras />
      <ShoppingInfo id=shoppingInfo />
    
    </div>
</template>


<script>
import FormCompras from '../components/FormCompras.vue';
import ShoppingInfo from '../components/ShoppingInfo.vue';

export default {
    name: "Cart",
    data() {
        return {
            adesivos: null
        };
    },
    components: { FormCompras, ShoppingInfo },
    methods: {
        async getAdesivos() {
            const req = await fetch("http://localhost:3333/infoadesivos");
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

.cart{
  width: 90%;
  border-radius: .5rem;
  margin: auto;

  padding-top: 12rem; 
}


.containerCart{
  width: 100%;
  height: 45vh;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: .5rem;
    
  padding: 1rem 2rem; 
  position: relative;
  z-index: 10;
   overflow-y: auto;

}

h1{
  font-size: 2rem;
  margin-bottom: 1rem;
}


.containerCart button:hover{
  background: rgb(170, 170, 170);
  transition:1s;
}

ul{
  list-style-type: none; 

}

li{
  border: 1px solid #ccc;

  margin-top: 1rem;
  border-radius: .5rem;
  display: flex;
  gap: 1rem;
  border-bottom: 1px solid #ccc;
  padding: .5rem .5rem 0;

}

.image img{
  width: 8rem;
  
   height: 6rem;
   background: #ccc;
   border-radius: .5rem;
}


.info{
   width: 65%;
}

.info span{
 font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  
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


</style>