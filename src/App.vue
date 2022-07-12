<template>
    <NavBar id="navBar"/>
    <div>
      <router-view></router-view>

    </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Home from './views/Home.vue'
  import Cart from './views/Cart.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    Cart
},
  
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

html {
  scroll-behavior: smooth;
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

  margin: auto;
}

a{
  color: #171717;
  text-decoration: none;
}


#navBar{
  margin-bottom: 4rem;
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #ccc;
}

/* #app {
  color: #2c3e50;
  
} */
</style>
