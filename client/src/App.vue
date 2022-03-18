<template>
  <div class="contenedor">
    <Header></Header>
      <Loading v-if="$store.state.loader"></Loading>
      <router-view></router-view>
  
    <Footer></Footer>
  </div>
  
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue"
import {axiosInterceptors} from "./tools/request-axios.js";

axiosInterceptors();

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loading
  }
}
</script>

<style>

</style>
