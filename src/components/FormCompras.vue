<template>
  <div class="containerForm">
    <form id="form"  @submit="createForm">
    <h1>Pagamento</h1>
    <div class="form-input">
     
      <div class="containerPerfil">
        <div class="nome">
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Nome:" >
          <input type="text" id="sobrenome" name="sobrenome" v-model="sobrenome" placeholder="Sobrenome:" >
        </div>

        <input type="email" id="email" name="email" v-model="email" placeholder="Email:" >
        <input type="tel" id="tel" name="tel" v-model="tel" placeholder="Telefone:">
      </div>
      
      <!-- endereço  -->
      <div class="containerEndereco">
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

      <div class="pagamento">
        <h3>Forma de Pagamento</h3>
        <div>
            <div class="containerCredito">
                <input v-model="idPagamentos" name="id" value="1" type="radio" >  
                <span >Cartão de crédito</span>
              <div class="cartao">
                <div class="col">
                  <div>
                    <label for="">Nome no cartão</label>
                    <input v-model="nomeCartao" type="text" />
                  </div>

                  <div>
                    <label for="">Numero do cartão</label>
                    <input v-model="numCartao" type="text" />
                  </div>
                </div>

                <div class="col">
                  <div>
                    <label for="">Data de expiração</label>
                    <input v-model="dataCartao" type="text" />
                  </div>

                  <div>
                    <label for="">CVV</label>
                    <input v-model="cvv" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div class="containerDebito" >
               <input v-model="idPagamentos" name="id" value="2" type="radio" >  
                <span>Cartão de Debito</span>
              <div class="cartao">
                <div class="col">
                  <div>
                    <label for="">Nome no cartão</label>
                    <input v-model="nomeCartao" type="text" />
                  </div>

                  <div>
                    <label for="">Numero do cartão</label>
                    <input v-model="numCartao" type="text" />
                  </div>
                </div>

                <div class="col">
                  <div>
                    <label for="">Data de expiração</label>
                    <input v-model="dataCartao" type="text" />
                  </div>

                  <div>
                    <label for="">CVV</label>
                    <input v-model="cvv" type="text" />
                  </div>
                </div>
              </div>
            </div>

            <div class="contaierBoleto">
              <input v-model="idPagamentos" name="id" value="3" type="radio" >  
              <span>Boleto</span>
              <div class="boleto">
                <label for="">Numero Boleto</label>
                <input type="text">
              </div>
            </div>

            <div class="containerPix">
               <input v-model="idPagamentos " name="id" value="4" type="radio" >  
               <span>Pix</span>
              <div class="pix">
                <h3>Chave pix</h3>
                <span>xxxxxxxxxxxxxxxxxxxx</span>
              </div>            
            </div>

          
        </div>
      </div>

    </div>

      <Message :msg="msg" v-show="msg" />
    <div class="btn-form">
      <button type="submit">Finalizar compra</button>
    </div>
  </form>
</div>
</template>

<script>
import Message from './Message.vue';
  export default{
    name: "FormCompras",
    data() {
        return {
            compra: null,
            nome: null,
            sobrenome: null,
            email: null,
            tel: null,
            endereco: null,
            pais: null,
            estado: null,
            cep: null,
            idPagamentos: null,
            tipo: null,
            numCartao: null,
            nomeCartao: null,
            dataCartao: null,
            cvv: null,
            msg: null
        };
    },
    methods: {
        async getForm() {
            const req = await fetch("http://localhost:3333/form");
            const data = await req.json();
            this.form = data.form;
        },
        async createForm(e) {
            e.preventDefault();
            const data = {
                form: this.form,
                nome: this.nome,
                sobrenome: this.sobrenome,
                email: this.email,
                tel: this.tel,
                endereco: this.endereco,
                pais: this.pais,
                estado: this.estado,
                cep: this.cep,
                idPagamentos: this.id,
                tipo: this.tipo,
                numCartao: this.numCartao,
                nomeCartao: this.nomeCartao,
                dataCartao: this.dataCartao,
                cvv: this.cvv,
            };
            const dataJson = JSON.stringify(data);
            const req = await fetch("http://localhost:3333/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: dataJson
            });
            const res = await req.json();

            //msg Sistema
            this.msg = "Compra realizada com sucesso!";

            setTimeout(() => this.msg = "", 3000);

            this.nome = "";
            this.sobrenome = "";
            this.email = "";
            this.tel = "";
            this.endereco = "";
            this.pais = "";
            this.estado = "";
            this.cep = "";
            this.idPagamentos = "";
            this.tipo = "";
            this.numCartao = "";
            this.nomeCartao = "";
            this.dataCartao = "";
            this.cvv = ""  
            console.log(res);
        }
    },
    mounted() {
        this.getForm();
    },
    components: { Message }
}

</script>


<style scoped>

.containerForm h1{
  font-size: 2rem;
}


form{
  width: 55%;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: .5rem;
  position: relative;
}
input[type="radio"] ~ div {
    display: none;
}
input[type="radio"]:checked ~ div {
    display: block;
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

.containerPerfil input{
  display: block;
  width: 100%;
  margin-top: 1.5rem;
}

.nome{
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  
}

.nome input{
  width: 50%;
}

.containerEndereco input{
  display: block;
  width: 100%;
}

.containerEndereco{
  width: 100%;
}

.residencia{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  grid-gap: 1.5rem 1rem;
  padding-top: 2rem;

}

.row{
  display: flex;
  flex-direction: column;

  width: 100%;
}

.row label{
  margin-bottom: .5rem;
}

.row select{

  padding: 1rem;
  border-radius: .5rem;
  border: 1px solid #ccc;
  background: white;
}

.pagamento h3{
  margin-bottom: .5rem
}

.pagamento span{
  margin-left: 1rem;
}


.cartao,
.boleto,
.pix{
  padding-left: 3rem;
  margin-top: 1rem;

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

  margin-top: 1rem;
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