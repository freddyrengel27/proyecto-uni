<template>
<div>
<div class="nav__bur" >
    <div class="nav__img" v-if="!showMenu" @click="showMenu = !showMenu" >
        <img src="../assets/img/menu.png">
    </div>
</div >

<div class="menu__contenedor" v-if="showMenu"  @click="closeMenu">
    <transition appear name="aniMenu">
        <nav class="menu__nav"> 
            <div class="menu__close" @click="showMenu= !showMenu">
                <img src="../assets/img/menuclose.png">
            </div>
            <div class="menu__title">
                <h4>Menu</h4>
            </div>
                <ul class="menu__ul">
                    <li class="menu__li"><router-link to="/home" active-class="menuActive" class="nav-iten"><span class="icon-iten"><img src="../assets/img/home.png"></span>Inicio</router-link></li>
                    <li class="menu__li"><router-link to="/pensum" active-class="menuActive" class="nav-iten"><span class="icon-iten"><img src="../assets/img/materia.png"></span>Pensum academico</router-link></li>
                    <li class="menu__li"><router-link to="/registro-profesores" active-class="menuActive" class="nav-iten"><span class="icon-iten"><img src="../assets/img/profesores.png"></span>Registro de profesores</router-link></li>
                    <li class="menu__li"><router-link to="/horarios" active-class="menuActive" class="nav-iten"><span class="icon-iten"><img src="../assets/img/horario.png"></span>Horarios</router-link></li>
                    <li class="menu__li"><router-link to="/historial" active-class="menuActive" class="nav-iten"><span class="icon-iten"><img src="../assets/img/horario.png"></span>Bitácora</router-link></li>
                    <li class="menu__li"><router-link to="/respaldo" active-class="menuActive" class="nav-iten"><span class="icon-iten"><img src="../assets/img/horario.png"></span>Respaldo</router-link></li>
                    <li class="menu__li"><a @click="exit" class="nav-iten"><span class="icon-iten"><img src="../assets/img/exit.png"></span>Salir</a></li>
                </ul>
        </nav>
    </transition>
</div>
</div>
</template>

<script>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import { ref} from '@vue/reactivity';
export default {
    name: "Menu",

    setup(){
        const store = useStore();
        const router = useRouter()

        const showMenu = ref(false)


        const exit = () =>{
            localStorage.removeItem("token")
            store.commit("setSession", false)
            router.push("/")
        }


        return{
            exit,
            showMenu,
        }
    }
}
</script>