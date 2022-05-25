<template>
<main class="main__user">
    
    <Menu></Menu>

    <div class="centro">
        <NavUser></NavUser>

        <div class="horario__select" v-if="!showHorarioD">
            <div class="contenedor__horario__item">
                <button class="btn btn-primary horario__item__diseño" @click="showHorarioD = !showHorarioD">Crear Horario</button>
            </div>

            <div class="contendor__targetHorario">

                <div class="targeta__horario" v-for="hora in dataHorarios" :key="hora.id" @click="download(hora.direccion)">
                    <di class="horariotaegeta__img">
                        <img src="../assets/img/pdf.png">
                    </di>
                    <div class="targeta__horarioTitu">
                        <span>{{hora.titulo}}</span>
                    </div>
                </div>

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
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'
import { global } from '../tools/request-axios'

export default{
    name: "Horarios",
    components:{
        NavUser,
        Menu,
        DiseñoHorario
    },
    setup(){
        
        const showHorarioD = ref(false)
        const dataHorarios = ref([]);

        onMounted(async() =>{
            await getHorarios();
        })

        const getHorarios = async () =>{
            const res = await axios.get(global + "geturlhorario");
            dataHorarios.value = res.data.horarios;
        }


        const download = async (url) =>{

            const res = await axios({method: "POST", url: global + "descarga", data:{url}, responseType: "blob"});

            const info = new Blob([res.data], {type: 'application/pdf'});

            const urlPDF = URL.createObjectURL(info);

            window.open(urlPDF);

            // let link = document.createElement("a");
            // link.style.display = "none";
            // link.href = urlPDF;
            // link.setAttribute("download", "horario.pdf");
            // document.body.appendChild(link);
            // link.click();
        }


        return{
            showHorarioD,
            dataHorarios,
            download
        }
    }
}
</script>