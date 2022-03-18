<template>
<main class="main__user">
    
    <Menu></Menu>

    <div class="centro">
        <NavUser></NavUser>

        <div class="horario__select" v-if="!showHorarioD">
            <div class="horario__item horario__item__diseño" @click="showHorarioD = !showHorarioD">
                <h4>Diseño de horarios</h4>
            </div>
            <div class="horario__item horario__item__visual">
                <h4>Visualización de horarios</h4>
            </div>
        </div>

        <DiseñoHorario v-if="showHorarioD" @backMenu="showHorarioD = !showHorarioD"></DiseñoHorario>

    </div>

    </main>
    
</template>

<script>
import { ref } from '@vue/reactivity'
import Menu from "./Menu.vue"
import NavUser from "./NavUser.vue"
import DiseñoHorario from "./DiseñoHorario.vue"

export default{
    name: "Horarios",
    components:{
        NavUser,
        Menu,
        DiseñoHorario
    },
    setup(){
        
        const showHorarioD = ref(false)



        return{
            showHorarioD
        }
    }
}
</script>