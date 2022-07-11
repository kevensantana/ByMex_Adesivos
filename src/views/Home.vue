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
</template>


<script>
import { ref } from 'vue'
import Card from '../components/Card.vue'


export default {
  nome: 'Home',
  components: {
    Card,
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
  display: flex;
  width: 70%;
  height: 78vh;
  /* border: 1px solid #ccc; */
  border-radius: .5rem;
  padding-top: 10rem;

}

.containerHome{
  padding: 1rem 3rem;
  width: 100%;
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