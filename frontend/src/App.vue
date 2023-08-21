<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavbarComp.vue";
import Footer from "./components/FooterComp.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,800&display=swap');

#app {
  font-family: 'Bricolage Grotesque', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f7f4f1;
  color: black;
}

nav {
  padding: 30px;
  color: black;
}

a{
  text-decoration: none !important;
  color: black !important;
}
</style>
