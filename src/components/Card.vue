<template>

  <div class="cards">
    <div class="card" v-for="adesivo in adesivos" :key="adesivo.id">
        <div class="image">
          <img :src="adesivo.image" alt="Adesivo">
        </div>
      <div class="info">
        <span :value="adesivo.valor">{{ adesivo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</span>
        <h3 :value="adesivo.title">{{adesivo.title}}</h3>
        <p :value="adesivo.descricao">{{adesivo.descricao}}</p>
      </div>

        <button type="type" onclick="$emit('createCart')">Comprar</button>
    </div>
  </div>
</template>

<script>


export default{
    name: 'Card',
    emits:['createCart'],

    data(){
       return{
        adesivos: null
       }
    },
     methods: {
      async getAdesivos() {
         const req = await fetch('http://localhost:3000/infoadesivos')
         const data = await req.json()

         this.adesivos = data.adesivos;
      }
    },
    mounted() {
     this.getAdesivos()
    }
}
</script>


<style scoped>

.cards{

   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
   grid-gap: 1.5rem 1rem;
    justify-items: center;
    align-items: stretch;
  /* padding-left: 2rem ; */
    padding-top: 2rem ;
    padding: 1rem;
}

.card{
  color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 18rem;
  height: 22rem;

  border-radius: .5rem;

  border:1px solid #b6b6b6;

  transition: all 0.3s ease 0s;

  position: relative;
  z-index: 1;

  padding-bottom: 1rem;
}

.card:hover{
   transform: translateY(-7px);
}

.card button{
  width: 50%;
  height: 3rem;
  margin: auto;
  cursor: pointer;
  padding: .5rem;
  border: none;
  border-radius: .5rem;
  color: #fff;
  background: #28a745;

  font-weight: bold;
}

.card button:hover{
  opacity: .8;
}

.image{
  width: 100%;
  height: 100%;

  overflow: hidden;
  position: relative;
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
}

.image img {
   width: 100%;
   height: 12rem;
   position: absolute;

   top: 0%;
}


.info{
  padding: 1rem;
}

.info h3{
  font-size: 1.8rem;
}

.info p{
  margin-top: .5rem;
  font-size: 1rem;
  max-height: 4rem;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.info span{
  font-size: 1.3rem;
  font-weight: bold;
  color: #2c3e50;
  float: right;
  margin-top: .5rem;

}

</style>