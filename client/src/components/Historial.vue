<template>
    <main class="main__user">

        <Menu></Menu>

        <div class="centro">
        <NavUser></NavUser>

        <h4 class="titulo__H">Bitácora</h4>
        <div class="contenedor__tablasR">
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Usuario</th>
                    <th scope="col">Acción</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="bi of bitacora" :key="bi.id_historia">
                    <th scope="row">{{bi.nombre_usuario}} {{bi.apellido_usuario}}</th>
                    <td>{{bi.accion}}</td>
                    <td>{{formate(bi.fecha)}}</td>
                    <td>{{bi.hora}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     </div>
    </main>

</template>

<script>
import { ref } from '@vue/reactivity';
import Menu from "./Menu.vue";
import NavUser from "./NavUser.vue";
import { onBeforeMount } from '@vue/runtime-core';
import axios from 'axios';
import {global} from "../tools/request-axios.js";
import moment from "moment";

export default {
    name: "Historial",
    components:{
        Menu,
        NavUser
    },
    setup(){
        const bitacora = ref([]);

        onBeforeMount(async () =>{

            const res = await axios.get(global + "getbitacora");
            bitacora.value = res.data.bitacora;
        });

        const formate = (date) =>{
            return moment(date).format("YYYY-MM-DD")
        }

        

        return{
            bitacora,
            formate
        }
    }

}
</script>