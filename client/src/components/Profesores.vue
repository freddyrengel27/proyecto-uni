<template>
<main class="main__user">
    
    <Menu></Menu>

    <div class="centro">
        <NavUser></NavUser>
        <div class="searh">
        <button class="btn btn-primary" @click="showModal = !showModal">Registrar</button>
        <input type="text" placeholder="Buscar" class="form-control campo" v-model="query">
        <div class="contenedor__btnPDF" @click="getPDF()">
            <img src="../assets/img/iconPDF.png">
        </div>
    </div>
    <div class="contenedor_tablas">
        <table class="table">
        <thead class="tablaP">
        <tr>
        <th scope="col">Documento</th>
        <th scope="col">Nombre</th>
        <th scope="col">apellido</th>
        <th scope="col">correo</th>
        <th scope="col">telefono</th>
        <th scope="col">materia</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="prof in buscador()" :key="prof.documento">
        <th scope="row">{{prof.documento}}</th>
        <td>{{prof.nombre}}</td>
        <td>{{prof.apellido}}</td>
        <td>{{prof.email}}</td>
        <td>{{prof.telefono}}</td>
        <td>{{prof.materia_asignada}}</td>
        <td>
        <button class="btn btn-success" @click="editar(prof)"><img class="icon__btn" src="../assets/img/icons8-edit-60.png"></button>
        <button class="btn btn-danger" @click="deletePro(prof)"><img class="icon__btn" src="../assets/img/icons8-delete-60.png"></button>
        </td>
        </tr>
        </tbody>
        </table>
            <nav aria-label="Page navigation example" v-if="totalPaginas() > 1">
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" @click="previusPagina()">Anterior</a>
                    </li>
                    <li class="page-item" :class="isActive(num)" v-for="num in totalPaginas()" :key="num" @click="setNumero(num)">
                        <a class="page-link" href="#">{{num}}</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" @click="nextPagina()">Siguiente</a>
                    </li>
                </ul>
            </nav>
    </div>
    </div>
    
    <modalProfesores v-if="showModal" @close="closeModal" :edicion="edit"></modalProfesores>
    
</main>
</template>

<script>
import NavUser from "./NavUser.vue";
import ModalProfesores from "./ModalProfesores.vue";
import Menu from "./Menu.vue";
import {  ref } from '@vue/reactivity';
import {getProfesores, global} from "../tools/request-axios.js"; 
import { onBeforeMount } from '@vue/runtime-core';
import {getDataPagina} from "../tools/paginacion.js";
import swal from "sweetalert";
import axios from "axios";
import generadorPDF from "../tools/generadorPdf.js"

export default{
    name: "Profesores",
    components:{
        NavUser,
        ModalProfesores,
        Menu
    },
    setup(){

        const showModal = ref(false);
        const profesores = ref([]);

        const edit = ref("");

        const filtro = ref([]);
        const paginacion = ref([]);
        const query = ref("");
        const paginaActual = ref(1);
        

        const buscador = () =>{
            if(!query.value) return getDataPagina(paginaActual.value, profesores.value);
            filtro.value = profesores.value.filter(prof => prof.nombre.toLowerCase().includes(query.value.toLowerCase().trim()))
            paginacion.value = getDataPagina(paginaActual.value, filtro.value)
            return paginacion.value
        }

        onBeforeMount(async () =>{
            profesores.value = await getProfesores();
            paginacion.value = getDataPagina(paginaActual.value, profesores.value);
        });

        

        const closeModal = () =>{
            showModal.value = false;
            edit.value = "";
        };

        const totalPaginas = () =>{
            if(!query.value) return Math.ceil(profesores.value.length / 4);
            return Math.ceil(filtro.value.length / 4);
        }

        const setNumero = (nu) =>{
            paginaActual.value = nu
            paginacion.value = getDataPagina(paginaActual.value, profesores.value)
        };

        const nextPagina = () =>{
            if(paginaActual.value < totalPaginas()){
                paginaActual.value++;
            }
            paginacion.value = getDataPagina(paginaActual.value, profesores.value)
        };

        const previusPagina = () =>{
            if(paginaActual.value > 1){
                paginaActual.value--;
            }
            paginacion.value = getDataPagina(paginaActual.value, profesores.value)
        };
    

        const editar = (obj) =>{
            edit.value = obj
            showModal.value = true
        }

        const deletePro = ({documento, nombre, apellido}) =>{
            swal({
  title: "Alerta",
  text: `¿Seguro que desea eliminar a ${nombre} ${apellido}?`,
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    let id = documento
    axios.delete(global+"deleteprof/"+id)
    .then(res =>{
      console.log(res)
    swal("EL registro se a eliminado!", {
      icon: "success",
    })
    
      
    });
  } else {
    swal("Se mantiene el registro");
  }
});
        }

        const isActive = (num) =>{
            if(num == paginaActual.value) return "active";
            return "";
        }

        const getPDF = () =>{
            const doc = generadorPDF();
            doc.setFontSize(11).text("Lista de profesores", 100, 45, "center")
            let Yvalue = 50
            profesores.value.forEach((prof) =>{
                Yvalue = Yvalue + 5
            doc.setFontSize(11).text(prof.documento, 17, Yvalue)
            doc.setFontSize(11).text(prof.nombre, 47, Yvalue)
            doc.setFontSize(11).text(prof.apellido, 77, Yvalue)
            doc.setFontSize(11).text(prof.email, 107, Yvalue)
            doc.setFontSize(11).text(prof.telefono.toString(), 157, Yvalue)
            return doc
            })
            
            doc.output('dataurlnewwindow',"lista");
        };


        return{
            showModal,
            query,
            buscador,
            paginacion,
            closeModal,
            editar,
            edit,
            deletePro,
            totalPaginas,
            setNumero,
            previusPagina,
            nextPagina,
            isActive,
            getPDF,
            

        }
    }
}
</script>