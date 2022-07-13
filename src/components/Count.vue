<template>
   <div>
      <form id="quantidade" class="containerQuantidade">
         <label for="">Quantidade:</label>
         <input min="0" max="20" type="number" v-model="quantidade">
      </form>
   </div>
</template>


<script>
  export default{
    name: "Count",
    data(){
      return{
         compras: null,
         quantidade: [],
      }
    },   
    methods: {
       async getCompras() {
        const req = await fetch("http://localhost:3333/compras");
        const data = await req.json();
        this.compras = data.compras;
        this.quantidadedata = data.quantidade;
      },
        async createCompras(e) {
        e.preventDefault();
        const data = {
          compras: this.Compras,
          quantidade: Array.from(this.quantidade),
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
     this.getCompras()
    }
  }

</script>


<style  scoped>
.containerQuantidade{
  text-align: center;
  margin-top: .5rem;
}

.containerQuantidade label{
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: 1rem;
}

.containerQuantidade input{
  width: 4rem;

}

</style>