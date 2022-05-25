<template>
<main class="main__user">
        
    <Menu></Menu>
    <div class="centro">
        <NavUser></NavUser>
        <h4 class="bienvendida">BIENVENIDO</h4>
        <div class="contenedor__inicio">
            <h4>Sistema</h4>
            <div class="contenedor__targeta">
                <div class="targeta__inicio">
                    <img src="../assets/img/iconoPensum.png" >
                    <div class="targeta__titulo">
                      <span>Pensum academico</span>
                    </div>
                </div>
                <div class="targeta__inicio">
                    <img src="../assets/img/iconoRegistro.png" >
                    <div class="targeta__titulo">
                      <span>Registro de profesores</span>
                    </div>
                </div>
                <div class="targeta__inicio">
                    <img src="../assets/img/iconoHorario.jpg" >
                    <div class="targeta__titulo">
                      <span>Diseño de horarios</span>
                    </div>
                </div>
                <div class="targeta__inicio">
                    <img src="../assets/img/iconoHistorial.png" >
                    <div class="targeta__titulo">
                      <span>Historial</span>
                    </div>
                </div>
                <div class="targeta__inicio">
                    <img src="../assets/img/iconoRespaldo.png" >
                    <div class="targeta__titulo">
                      <span>Respaldo</span>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</main>
</template>


<script>
import Menu from "./Menu.vue"
import NavUser from "./NavUser.vue"
import {useStore} from "vuex";
import {onMounted} from "vue";






export default{
    name: "Home",
    components:{
        Menu,
        NavUser,
    },
    setup(){
        const store = useStore();
       onMounted(() =>{
           if(store.state.loader){
               store.commit("setLoader", false)
           }
       });
    
    }
}
</script>
