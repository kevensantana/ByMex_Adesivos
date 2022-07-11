<template>
    <NavBar/>
    <div>
      <router-view></router-view>
      <ShoopingInfo />
    </div>
</template>

<script>
  import NavBar from './components/NavBar.vue'
  import Home from './views/Home.vue'
  import ShoopingInfo from './components/ShoopingInfo.vue'


export default {
  name: 'App',
  components: {
    NavBar,
    Home,
    ShoopingInfo
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

  width: 90%;
  margin: auto;
}

a{
  color: #171717;
  text-decoration: none;
}


/* #app {
  color: #2c3e50;
  
} */
</style>
