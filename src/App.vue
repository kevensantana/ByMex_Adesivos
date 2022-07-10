<template>
  <div>
    <Header />
    <div id="conect">
       <Home />
       <Cart />
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Home from './components/Home.vue'
  import Cart from './components/Cart.vue'
  import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    Cart,
  } 
}

</script>



<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-size: 62.5%;  /* 1rem=10px */
}

html,
body{
  width: 100%;
  height: 100%;
}

body{
  font-size: 1.6rem;
  font-family: 'DM Sans', sans-serif;
  color: #171717;

  width: 90%;
  margin: auto;
}

a{
  color: #171717;
  text-decoration: none;
}

#conect{
  display: flex;
  padding-top: 10%;
  gap: 2%;
}



/* #app {
  color: #2c3e50;
  
} */
</style>
