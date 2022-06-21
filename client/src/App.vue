<template>
  <div class="contenedor">
    <Header></Header>
      <Loading v-if="$store.state.loader"></Loading>
      <router-view></router-view>
      <CloseSesion v-if="showCerrar" @cerrar="cerrarVentana"/>
    <Footer></Footer>
  </div>
  
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Loading from "./components/Loading.vue"
import CloseSesion from "./components/CloseSesion.vue";
import {axiosInterceptors} from "./tools/request-axios.js";
import {useStore} from "vuex";
import {onMounted, ref} from "vue";


axiosInterceptors();

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loading,
    CloseSesion
  },
  setup(){
    const store = useStore();
    const showCerrar = ref(false);


    onMounted(() =>{
      setInterval(() =>{
        if(store.state.session && !showCerrar.value){
          showCerrar.value = true;
        }
        
      }, 425000)
    })

    const cerrarVentana = () =>{
      showCerrar.value = false;
    };

    return{
      showCerrar,
      cerrarVentana
    }
  }
}
</script>


