<template>
<main class="main__user">   
    <Menu></Menu> 
    <div class="centro">
        <NavUser></NavUser>
        <div class="searh">
            <input type="text" placeholder="Buscar" class="form-control campo" v-model="query">
            <div class="contenedor__btnPDF" @click="ayuda()">
            <img src="../assets/img/iconPDF.png">
        </div>
        </div>
    <div >
    <div class="contenedor_carreras" v-if="materias.length == 0">
        <div class="header_carreras">
            <h2>Carreras</h2>
            <p>Seleccione una carrera</p>
        </div>
        <div class="targeta_Carreras" >
            <div class="carreras" v-for="carrera in carreras" :key="carrera.id_carrera" @click="getmateria(carrera.id_carrera)">
                <div class="header_carrera">
                    <h2>Pensum Academico</h2>
                </div>
                <div class="name_carrera">
                    <h2>{{carrera.carrera}}</h2>
                </div>
            </div>
        </div>
    </div>
</div>

    <div class="contenedor_tablas" v-if="materias.length >= 1">
        <table class="table">
            <thead class="tablaP">
            <tr>
            <th scope="col">Codigo</th>
            <th scope="col">Asignatura</th>
            <th scope="col">uc</th>
            <th scope="col">Turno</th>
            <th scope="col">Semestre</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="materia in buscador()" :key="materia.cod_materia" >
            <th scope="row">{{materia.cod_materia}}</th>
            <td>{{materia.asignatura}}</td>
            <td>{{materia.uc}}</td>
            <td>{{materia.turno}}</td>
            <td>{{materia.semestre}}</td>
            </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example" v-if="totalPaginas() > 1">
            <ul class="pagination">
                <li class="page-item" @click="previusPagina()">
                    <a class="page-link" href="#">Anterior</a>
                </li>
                <li class="page-item" :class="isActive(pagina)"  v-for="pagina in totalPaginas()" :key="pagina" @click="setNumero(pagina)">
                    <a class="page-link"  href="#">{{pagina}}</a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" @click="nextPagina">Siguiente</a>
                </li>
            </ul>
        </nav>
        
    </div>
</div>
<!--<ModalPensum v-if="showModal == true" :eviMateria="editMateria" @close="modalClose"></ModalPensum>
-->
</main>
</template>

<script>
import NavUser from "./NavUser.vue";
//import ModalPensum from "./ModalPensum.vue";
import Menu from "./Menu.vue";
import { ref, } from '@vue/reactivity';
import { onBeforeMount } from '@vue/runtime-core';
import {getCarerras, getMaterias} from "../tools/request-axios.js";
import {getDataPagina} from "../tools/paginacion.js";

export default{
    name: "Pensum",
    components:{
        NavUser,
        Menu,
    },
    setup(){
        const carreras = ref([]);
        const materias = ref([]);

    
        const query = ref("");
        const filtro = ref([]);
        const paginaActual = ref(1);
        const paginacion = ref([]);


        onBeforeMount( async() =>{
            carreras.value = await getCarerras();
        });

        const totalPaginas = () =>{
            if(!query.value) return Math.ceil(materias.value.length / 4);
            return Math.ceil(filtro.value.length / 4);
        }

        const getmateria = async (id) =>{
            materias.value = await getMaterias(id)
            paginacion.value = getDataPagina(paginaActual.value, materias.value)
        };

        const buscador = () =>{
            if(!query.value) return paginacion.value;

            filtro.value = materias.value.filter(mat => mat.asignatura.toLowerCase().includes(query.value.toLowerCase().trim()))
            paginacion.value = getDataPagina(paginaActual.value, filtro.value);
            return paginacion.value
        };

        const setNumero = (nu) =>{
            paginaActual.value = nu
            paginacion.value = getDataPagina(paginaActual.value, materias.value)
        };

        const nextPagina = () =>{
            if(paginaActual.value < totalPaginas()){
                paginaActual.value++;
            }
            paginacion.value = getDataPagina(paginaActual.value, materias.value)
        };

        const previusPagina = () =>{
            if(paginaActual.value > 1){
                paginaActual.value--;
            }
            paginacion.value = getDataPagina(paginaActual.value, materias.value)
        };

        const isActive = (num) =>{
            if(num == paginaActual.value) return "active";
            return "";
        };

        const ayuda = () =>{
            console.log("hola")
        }

        return{
            carreras,
            buscador,
            getmateria,
            paginacion,
            materias,
            totalPaginas,
            query,
            setNumero,
            nextPagina,
            previusPagina,
            isActive,
            ayuda
        }
    }
}
</script>