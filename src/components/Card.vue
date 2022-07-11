<template>

  <div class="cards">
    <div class="card" v-for="(adesivo, index) in adesivos" :key="index">
        <div class="image">
          <img :src="adesivo.image" alt="Adesivo">
        </div>
      <div class="info">
        <span>{{adesivo.valor}}</span>
        <h3>{{adesivo.title}}</h3>
        <p>{{adesivo.descricao}}</p>
      </div>

        <button type="button" @click="count++">Comprar</button>
    </div>
  </div>
</template>

<script>

export default{
    name: 'Card',

    data(){
       return{
        adesivos: [
            {
              id:1, image: "/img/java.jpg", title: 'Java', valor: 'R$20,00',
              descricao: "Uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling."},
            {
              id:2, image: "/img/python.png", title: 'Python', valor: 'R$30,00',
              descricao: "Uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos e funcional."},
            {  
              id:3, image: "/img/react.png", title: 'React', valor: 'R$15,00',
              descricao: "Uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."},
            {
              id:1, title: 'Java',  
              descricao: "Linguade de programação..."},
            {
              id:2, title: 'Python',
              descricao: "Linguade de programação..."},
            {
              id:3, title: 'React', 
              descricao: "Framework de programação..."}
            ,
            {
              id:1, title: 'Java',  
              descricao: "Linguade de programação..."},
            {
              id:2, title: 'Python',
              descricao: "Linguade de programação..."},
            {
              id:3, title: 'React', 
              descricao: "Framework de programação..."}
            ,
            {
              id:1, title: 'Java',  
              descricao: "Linguade de programação..."},
            {
              id:2, title: 'Python',
              descricao: "Linguade de programação..."},
            {
              id:3, title: 'React', 
              descricao: "Framework de programação..."}
            ,
            {
              id:1, title: 'Java',  
              descricao: "Linguade de programação..."},
            {
              id:2, title: 'Python',
              descricao: "Linguade de programação..."},
            {
              id:3, title: 'React', 
              descricao: "Framework de programação..."}
          ]
       }
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