<template>
    <main class="main__user">

        <Menu></Menu>

        <div class="centro">
        <NavUser></NavUser>

        <div class="contenedor__btnRespaldo">

            <div class="respaldo__targeta" @click="getREspaldo">
                <div class="respaldo__img">
                    <img src="../assets/img/pngegg.png">
                </div>
                <h4>Generar respaldo</h4>
            </div>
            <div class="respaldo__targeta">
                <div class="respaldo__img">
                    <img src="../assets/img/subida.png">
                </div>
                <h4>Subir respaldo</h4>
            </div>


        </div>
        
        </div>
    </main>

</template>

<script>
import Menu from "./Menu.vue";
import NavUser from "./NavUser.vue";
import {global} from "../tools/request-axios.js"
import axios from 'axios';
export default {
    name: "Respaldo",
    components:{
        Menu,
        NavUser
    },
    setup(){


        const getREspaldo = async () =>{

            const res = await axios({
                method: "POST",
                url: global + "respaldo",
                responseType: "blob"
            });
            const blo = new Blob([res.data]);
            const urlRes = URL.createObjectURL(blo);
            let link = document.createElement("a");
            link.style.display = "none";
            link.href = urlRes;
            link.setAttribute("download", "respaldo.sql");
            document.body.appendChild(link);
            link.click();
        };

        return{
            getREspaldo
        }
    }

}
</script>