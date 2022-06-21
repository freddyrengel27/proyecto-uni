<template>
    <main class="main__user">

        <Menu></Menu>

        <div class="centro">
        <NavUser></NavUser>

        <h4 class="titulo__H">Bitácora</h4>

        <div class="contenedor_selectFecha" v-if="!showBitacora">
            <h4>Selecciona las fechas</h4>
            <div class="caja__calendario">
                <div class="caja_fecha">
                <span>Desde</span>
                <Datepicker v-model="datePicketOld" />
            </div>
            <div class="caja_fecha">
                <span>Hasta</span>
                <Datepicker v-model="datePicketAct" />
            </div>
            </div>
            
            <button class="btn btn-primary botonFecha" @click="getHistoria">Ver</button>
        </div>

        <div class="contenedor__tablasR" v-else>
            <table class="table">
        <thead class="tablaP">
        <tr>
        <th scope="col">Usuario</th>
        <th scope="col">Acción</th>
        <th scope="col">fecha</th>
        <th scope="col">hora</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="bitacora in bitacora" :key="bitacora.id_historia">
        <th scope="row">{{bitacora.nombre_usuario}} {{bitacora.apellido_usuario}}</th>
        <td>{{bitacora.accion}}</td>
        <td>{{formate(bitacora.fecha)}}</td>
        <td>{{bitacora.hora}}</td>
        </tr>
        </tbody>
        </table>
        <button class="btn btn-danger" @click="() => showBitacora = false">Regresar</button>
        </div>
     </div>
    </main>

</template>

<script>
import { ref } from '@vue/reactivity';
import Menu from "./Menu.vue";
import NavUser from "./NavUser.vue";
import axios from 'axios';
import {global} from "../tools/request-axios.js";
import moment from "moment";
import Datepicker from "vue3-datepicker";

export default {
    name: "Historial",
    components:{
        Menu,
        NavUser,
        Datepicker
    },
    setup(){
        const bitacora = ref([]);
        const showBitacora = ref(false);

        const datePicketOld = ref(new Date());
        const datePicketAct = ref(new Date());

        const formate = (date) =>{
            return moment(date).format("YYYY-MM-DD")
        }

        const getHistoria = async () =>{
         
            const fechaOld = moment(datePicketOld.value).format("YYYY-MM-DD");
            const fechaAct = moment(datePicketAct.value).format("YYYY-MM-DD");
            
            const {data} = await axios.get(`${global}/getbitacora/${fechaOld}:${fechaAct}`);
            bitacora.value = data.bitacora;
            showBitacora.value = true;
        };
        

        return{
            bitacora,
            showBitacora,
            datePicketOld,
            datePicketAct,
            getHistoria,
            formate
        }
    }

}
</script>