<template>
<nav class="nav__user">
    <p class="user__path" v-if="$route.path == '/home'"><b>Inicio</b></p>
    <p class="user__path" v-else-if="$route.path == '/pensum'"><b>Pensum Académico</b></p>
    <p class="user__path" v-else-if="$route.path == '/registro-profesores'"><b>Registro Profesores</b></p>
    <p class="user__path" v-else-if="$route.path == '/historial'"><b>Bitácora</b></p>
    <p class="user__path" v-else><b>Horarios</b></p>
    <div class="user__logo"><img src="../assets/img/usuario.png"></div>
    <p class="user__nombre"><b>{{$store.state.user.nombre}} {{$store.state.user.apellido}}</b></p>
</nav>
</template>

<script>

export default {
    name: "NavUser",
    setup(){
        

        return{
            
        }
    }
}
</script>