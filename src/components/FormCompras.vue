<template>
  <div>
    <form id="form"  @submit="createForm">
    <h1>Pagamento</h1>
    <div class="form-input">
      <div class="nome">
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Nome:" >
        <input type="text" id="sobrenome" name="sobrenome" v-model="sobrenome" placeholder="Sobrenome:" >
      </div>

      <input type="email" id="email" name="email" v-model="email" placeholder="Email:" >
      <input type="tel" id="tel" name="tel" v-model="tel" placeholder="Telefone:">
        
      <div>
        <input type="text" id="endereco" name="endereco" v-model="endereco" placeholder="Endereço:" >
        <div class="residencia">
          <div class="row">
            <label for="pais">País</label>
            <select v-model="pais" name="pais" id="pais">
              <option selected disabled value="">Escolha...</option>
              <option  value="">Brasil</option>
            </select>
          </div>
          <div class="row">
            <label for="estado">Estado</label>
            <select v-model="estado" name="estado" id="estado">
              <option selected disabled value="">Escolha...</option>
            </select>
        </div>
          <div class="row">
            <label for="cep">CEP</label>
            <input v-model="cep" name="cep" type="text">
          </div>
        </div>
      </div>

      <div class="pagamento" >
        <h3> Forma de Pagamento</h3>
        <div v-for="pagar in formaPagamento" :key="pagar.id">
          <input type="radio" name="pagar" v-model="formaPagamento" :value="pagar.tipo" >
          <span :value="pagar.tipo">{{ pagar.tipo }}</span>
        </div>
      </div>

      <div class="cartao">
        <div class="col">
          <div> 
            <label for="">Nome no cartão</label>
            <input v-model="nomeCartao" type="text">
          </div>
        
          <div>
            <label for="">Numero do cartão</label>
            <input v-model="numCartao" type="text">
          </div>
        </div>
        
        <div class="col">
          <div>
            <label for="">Data de expiração</label>
            <input v-model="dataCartao" type="text">
          </div>

          <div>
            <label for="">CVV</label>
            <input v-model="cvv" type="text">
          </div>
        </div>

      </div>
      
    </div>

    <div class="btn-form">
      <button type="submit">Finalizar compra</button>
    </div>
        

  </form>
</div>
</template>

<script>
  export default{
    name: 'FormCompras',
    data() {
      return {
        
        nome: null,
          sobrenome: null,
          email: null,
          tel: null,
          endereco: null,
          pais: null,
          estado: null,
          cep: null,
          
          formaPagamento: null,
          numCartao: null,
          nomeCartao: null,
          dataCartao: null,
          cvv: null
      }
  },
  components: { 
  },
  methods: {
    async getPagamentos() {
      const req = await fetch("http://localhost:3000/Pagamentos");
      const data = await req.json();

      this.formaPagamento = data.formaPagamento;
    },
    async createForm(e) {
      e.preventDefault()

      const data = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        email: this.email,
        tel: this.tel,
        endereco: this.endereco,
        pais: this.pais,
        estado: this.estado,
        cep: this.cep,
        
        formaPagamento: this.formaPagamento,
        
        numCartao: this.numCartao,
        nomeCartao: this.nomeCartao,
        dataCartao: this.dataCartao,
        cvv: this.cvv
      }
        console.log(data)
    }
  },
  mounted() {
    this.getPagamentos();
  },
  }

</script>


<style scoped>

form{
  width: 55%;
  margin: 8rem 0;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: .5rem;
  position: relative;
}
.form-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
 
  margin-left: 2rem;
}

input{
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid #ccc;
}



.nome{
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  padding-top: 2rem;
}

.nome input{
  width: 50%;
}


.residencia{
  padding-top: 2rem;
  display: flex;
  gap: 3rem;
}

.row{
  display: flex;
  flex-direction: column;
}

.row label{
  margin-bottom: 1rem;
}

.row select{
  width:17rem;
  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid #ccc;
  background: white;
}

.pagamento h3{
  margin-bottom: 1rem
}

.pagamento span{
  margin-left: 1rem;
}

.cartão{
  width: 100%
}

.col{
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-bottom: 2rem;
}
.col input{

  margin-top: 1rem;
  width: 100%;
}

.btn-form{
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 2rem;
}

button{
  
  padding: 1rem;
  border-radius: .5rem;
  border: none;

  font-size: 1.4rem;
  font-weight: bold;
  background: #ccc;
  cursor: pointer;
}







</style>