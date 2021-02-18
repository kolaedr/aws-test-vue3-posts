<template>
  <Navbar />
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<script>
import Home from "@/pages/Home.vue";
import Navbar from '@/components/layouts/Navbar';

export default {
  name: "App",
  components: {
    Home,
    Navbar
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 1000px;
  margin: 0 auto;
}
a{
  color: #2c3e50;
  text-decoration: none;
  &:visited{
    color: #2c3e50;
  }
}
ul{
  list-style: none;
  text-align: start;
  li{ 
    padding: 0.5rem;
  }
}
</style>
