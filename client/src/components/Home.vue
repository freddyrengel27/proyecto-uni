<template>
<main class="main__user">
        
    <Menu></Menu>
    <div class="centro">
        <NavUser></NavUser>
        <div class="contenedor__carrucel">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
             <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/img/carru1.jpeg" alt="unefa">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/img/carru3.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/img/carru4.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
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
