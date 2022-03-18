<template>
<div class="modal__contenedor">
    <div class="contenedor-fomr">
    <h4 v-if="showUpdate">Edicion de profesor</h4>
    <h4 v-else>Registro de profesor</h4> 
    <form class="from-registro" @submit.prevent>

        <transition appear name="transicionRegistro">

        <div class="contendor-datos" v-if="estado">
            <div class="contendor-input" v-if="!showUpdate">
                <label for="documento">Documento</label>
                    <div class="documentoProf">
                        <div class="tipoProf">   
                            <select class="form-control" v-model="formData.tipoDop">
                                <option>V</option>
                                <option>E</option>
                                <option>P</option>
                            </select>
                        </div>
                        <input type="text" class="form-control" id="documento" placeholder="Enter documento" v-model="formData.documento">
                    </div>
                </div>
                <div class="contendor-input">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Enter nombre" v-model="formData.nombre">
            </div>
            <div class="contendor-input">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" id="apellido" placeholder="Enter apellido" v-model="formData.apellido">
            </div>
            <div class="contendor-input">
                <label for="correo">Correo</label>
                <input type="email" class="form-control" id="correo" placeholder="Enter email" v-model="formData.email">
            </div>
            <div class="contendor-input">
                <label for="exampleInputEmail1">Telefono</label>
                <input type="text" class="form-control" id="telefono" placeholder="Enter telefono" v-model="formData.telefono">
            </div>   
            <div class="contenedor-button botones1">
                <button class="btn btn-success" @click="estado = !estado">Siguiente</button>
                <button class="btn btn-danger" @click="close()">Cancelar</button>
            </div>
        </div>
    <div v-else>
    <div class="contendor-input">
        <label for="exampleInputEmail1">Carrera</label>    
        <select class="form-control" id="exampleFormControlSelect1" v-model="carrera" @click="getMateria()">
        <option v-for="car in lasCarreras" :key="car.id_carrera" :value="car.id_carrera">{{car.carrera}}</option>
        </select>
    </div>
    <div class="contendor-input">
        <label for="semestre">Semestre</label>
            <select class="form-control" id="semestre" v-model="semestre">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
    </div>
    <div class="contendor-input">
        <label for="exampleInputEmail1">Materia</label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="selectMateria">
            <option v-for="mat in filterMaterias()" :key="mat.cod_materia" :value="mat.cod_materia">{{mat.asignatura}}</option>
        </select>
        <button class="btn btn-success" @click=" addMateria()">Añadir</button>
    </div>
    <ul class="contendor-input lista-materia" >
        <li v-for="materia in  formData.materias" :key="materia"> <button class="btn btn-danger" @click="eliminar(materia)">X</button> {{materia}}</li>
    </ul>
    <div class="contenedor-button botones">
        <button class="btn btn-success" @click="estado = !estado">Regresar</button>
        <button class="btn btn-primary" v-if="!showUpdate" @click="registro()">Registrar</button>
        <button class="btn btn-primary" v-if="showUpdate" @click="update()">Actualizar</button>
        <button class="btn btn-danger" @click="close()">Cancelar</button>
    </div>
</div>
</transition>
</form>
</div>
</div>


</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import useVuelidate from "@vuelidate/core";
import {required, minLength, numeric, email, maxLength} from "@vuelidate/validators";
import { onBeforeMount } from '@vue/runtime-core';
import {getCarerras, getMaterias, global} from "../tools/request-axios.js"
import swal from 'sweetalert';
import axios from 'axios';
export default {
    name: "ModalProfesores",
    props: ["edicion"],
        
    

    setup(props, {emit}){
      
        const showUpdate = ref(false);
        const estado = ref(true);
        let materias = ref([])
        let lasCarreras = ref([])
        const carrera = ref("")
        const semestre = ref(1)
        const selectMateria = ref("")

        

        const formData = reactive({
            tipoDop:"",
            documento:"",
            nombre: "",
            apellido: "",
            email: "",
            telefono: "",
            materias: []
        });

        const validateData = reactive({
            tipoDop: {required},
            documento: {required, numeric, minLength: minLength(7), maxLength: maxLength(8)},
            nombre: {required, minLength: minLength(2)},
            apellido: {required, minLength: minLength(2)},
            email: {required, email},
            telefono: {required, minLength: minLength(5), numeric},
            materias: {required}
        });


        onBeforeMount( async() =>{
            if(props.edicion) edicion() 
            lasCarreras.value =  await getCarerras()

        })

        const v$ = useVuelidate(validateData, formData);

        const getMateria = async () =>{
           
            if(carrera.value){
                materias.value = await getMaterias(carrera.value)
            }
            
        };

        const addMateria = () =>{
            if(selectMateria.value){
                formData.materias.push(selectMateria.value)
            }
        }

        const filterMaterias = () =>{
            return materias.value.filter(mat => mat.semestre == semestre.value)
        }

        const eliminar = (cod) =>{
            formData.materias.pop(cod)
        };

        const close = () =>{
            emit("close")
        }

        const registro = async () =>{
            v$.value.$touch()
            if(v$.value.$invalid){
                return swal("Datos invalidos",
                            "Error en la validacion",
                            "error")
            }

            const data = {
                documento : `${formData.tipoDop}${formData.documento}`,
                nombre: formData.nombre,
                apellido: formData.apellido,
                email: formData.email,
                telefono: formData.telefono,
                materias: formData.materias.toString()
            };

            const response = await axios.post(global+"addprofesor", data)

            if(response.data.type == "error"){
                return swal("Error",
                            response.data.message,
                            "error")
            }
            
                 swal(
                    "Registro de docente",
                    "Sea registrado con exito el docente",
                    "success")
                    close();
        }

        const edicion = () =>{
            let prof = props.edicion
            formData.nombre = prof.nombre
            formData.apellido = prof.apellido
            formData.email = prof.email
            formData.telefono = prof.telefono
            formData.materias = prof.materia_asignada.split(",")
            showUpdate.value = true
        }

        const update = async () =>{
            const data ={
                documento: props.edicion.documento,
                nombre: formData.nombre,
                apellido: formData.apellido,
                email: formData.email,
                telefono: formData.telefono.toString(),
                materias: formData.materias.toString()
            }
            console.log(data)
            const response = await axios.put(global+"updateprofe", data)
            if(response.data.type == "error"){
                return swal("Error",
                            response.data.message,
                            "error")
            }

            swal("fin de actializacion",
                "El registro se a actualizado con exito",
                    "success")
                    close()
        }

        

        

        return{
            estado,
            showUpdate,
            formData,
            getMateria,
            v$,
            materias,
            lasCarreras,
            carrera,
            semestre,
            filterMaterias,
            addMateria,
            selectMateria,
            eliminar,
            close,
            registro,
            update,
            
        }
    }

}
</script>