<template>
  <div class="containerCard">
    <div class="cards">
      <div class="card" v-for="adesivo in adesivos" :key="adesivo.id" >
          <div  class="image">
            <img  :src="adesivo.image" alt="Adesivo">
          </div>
          <div class="info">
            <span :value="adesivo.valor">{{ adesivo.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}}</span>
            <h3 :value="adesivo.title">{{adesivo.title}}</h3>
            <p :value="adesivo.descricao">{{adesivo.descricao}}</p>
            <div class="checkboxONE">
              <input type="checkbox" name="opcionais" v-model="opcionais" :value="adesivo.id">
              <span>Escolha seu adesivo</span>              
            </div>

            <count/>               
          </div>
      </div>
    </div>
    <form @submit="createCompras">            
      <div class="btnCard">
        <button onclick="location.reload();" v-on:click="quantidade" type="submit">Comprar</button>
      </div>   
    </form>
  </div>

</template>

<script>
import Count from './Count.vue'
export default{
  components: { Count },
  name: 'Card',
 
    data(){
      return{
        adesivos: null,
        compras:null,
        idCompras:null,
        opcionais: [],
       }
    },
     methods: {
      async getAdesivos() {
        const req = await fetch('http://localhost:3333/infoadesivos')
        const data = await req.json()
        this.adesivos = data.adesivos;
      },
      async getCompras() {
        const req = await fetch("http://localhost:3333/compras");
        const data = await req.json();
        this.compras = data.compras;
        this.opcionaisdata = data.opcionais
      },
      async createCompras(e) {
        e.preventDefault();
        const data = {
          // adesivos: this.adesivos,
          compras: this.Compras,
          opcionais: Array.from(this.opcionais),
        }
        const dataJson = JSON.stringify(data);
          const req = await fetch("http://localhost:3333/compras", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: dataJson
          });

        const res = await req.json();
        
        
        console.log(res);
      }
        
    },
    mounted() {
     this.getAdesivos(),
     this.getCompras()
    }
}
</script>


<style scoped>

.containerCard{
  padding-bottom: 2rem;
  height: auto;
}

.cards{
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
   grid-gap: 1.5rem 1rem;
    justify-items: center;
    align-items: stretch;
  /* padding-left: 2rem ; */
    padding: 1rem;
  
}

.card{
  color: #272727;
  display: flex;
  flex-direction: column;
  justify-content: end;

  width: 18rem;
  height: 25rem;

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

.btnCard{
  width: 100%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-content: center;
}

.btnCard button{
  /* position: fixed;
  bottom: 3%; */
  cursor: pointer;
  padding: 1rem 5rem;
  border: none;
  border-radius: .5rem;
  color: #fff;
  background: #28a745;

  font-weight: bold;
}

.btn-Card button:hover{
  opacity: .8;

}

.checkboxONE{
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
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

.info input[chackbox]{
    padding: 2rem;
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