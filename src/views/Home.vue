<template>
   <main >
      <div class="containerHome">
         <div class="title">
            <h1>Produtos</h1>
            <span>Selecione seus adesivos.</span>
         </div>
        <Card />
      </div>
   </main>
        <ShoppingInfo/>
</template>


<script>
import { ref } from 'vue'
import Card from '../components/Card.vue'
import ShoppingInfo from '../components/ShoppingInfo.vue'

export default {
  nome: 'Home',
  components: {
    Card,
    ShoppingInfo
},
  data() {
      return{
          count: ref(''),
          nome: 'ByMex Adesivos',
      }
  },
  created() {
      
  }
}

</script>


<style scoped>

main{
  height: 78vh;
  /* border: 1px solid #ccc; */
  border-radius: .5rem;

}

.containerHome{
  width: 65%;
  padding: 12rem 3rem 0; 
  margin-left: 5%;
}

.title{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title h1{
  font-size: 2.5rem;
}
.title span{
  color: #828282;
  margin-right: 3rem;
}

</style>>