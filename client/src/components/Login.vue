<template>
<main class="main">
<div class="login__contenedor">
    <div class="Login__img">
        <img src="../assets/img/usuario.png" class="login__img__user" />
    </div>
    <h4>Inicio de Sesión</h4>
    <form class="form login__form" @submit.prevent>
        <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email" v-model="dataLogin.email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" placeholder="Password" v-model="dataLogin.password">
        </div>
        <input type="submit" value="Entrar" class="btn btn-primary" @click="login()"/>
    </form>
    <button class="btn btn-success" @click="showModal = !showModal">Regístrarse</button>
</div>

<div class="modal__contenedor" v-if="showModal">
    <transition appear @before-enter="animacion" @enter="entra">
        <div class="modal__registro">
            <h4>Registro de usuario</h4>
            <button class="btn btn-danger registro__cerrar" @click="closeRegistro">X</button>
            <form class="registro__modal" @submit.prevent>
                <div class="formDoc registro__input">
                    <label for="documento">Documento</label>
                    <div class="registro__select">
                        <select class="form-control registro_select__item" v-model="registro.tipoDocumento">
                        <option>V</option>
                        <option>E</option>
                        <option>P</option>
                        </select>
                        <input type="text" class="form-control" id="doc" placeholder="nuemero de documento" v-model="registro.documento"/>
                    </div>
                </div>
                <div class="form-group registro__input">
                    <label for="nombre">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="nombre" v-model="registro.nombre"/>
                </div>
                <div class="form-group registro__input">
                    <label for="apellido">Apellido</label>
                    <input type="text" class="form-control" id="apellido" placeholder="apellido"  v-model="registro.apellido"/>
                </div>
                <div class="form-group registro__input">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="email" v-model="registro.email"/>
                </div>
                <div class="form-group registro__input">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="password" v-model="registro.password"/>
                </div>
                <input type="submit" value="Enviar" class="btn btn-primary registro__submit" @click="registroSend">
            </form>
        </div>
    </transition>
</div>
</main>    
</template>
    
<script>
import { ref, reactive } from '@vue/reactivity';
import useVuelidate from "@vuelidate/core";
import {required, minLength, numeric, email, maxLength} from "@vuelidate/validators";
import {useStore} from "vuex";
import axios from "axios";
import {global} from "../tools/request-axios.js";
import swal from "sweetalert"
import {setToken, getToken} from "../tools/tokens.js"
import {useRouter} from "vue-router"


export default{
    name: "Login",

    setup(){
        const store = useStore();
        const router = useRouter();
        const showModal = ref(false);

        const registro = reactive({
            tipoDocumento:"",
            documento: "",
            nombre: "",
            apellido: "",
            email: "",
            password: "",
        });

        const dataLogin = reactive({
            email: "",
            password: ""
        })

        const validatorRegistro = reactive({
            tipoDocumento: {required},
            documento: {required, numeric, minLength: minLength(7), maxLength: maxLength(8)},
            nombre: {required, minLength: minLength(2)},
            apellido: {required, minLength: minLength(2)},
            email: {required, email},
            password: {required, minLength: minLength(2)}
        });

       const vR$ = useVuelidate(validatorRegistro, registro)

        const validatorLogin = reactive({
            email: {required, email},
            password: {required, minLength: minLength(2)}
        });

        const vL$ = useVuelidate(validatorLogin, dataLogin)


        const closeRegistro = () =>{
            showModal.value = false
            registro.tipoDocumento = ""
            registro.documento = ""
            registro.nombre = ""
            registro.apellido = ""
            registro.email = ""
            registro.password = ""
        }
        
        const registroSend = async () =>{
            vR$.value.$touch()

            if(vR$.value.$invalid){
                swal(
                    "Datos invalidos",
                    "Verifique los campos introducidos",
                    "error"
                )
            }else{

                const data = {
                documento: `${registro.tipoDocumento}${registro.documento}`,
                nombre: registro.nombre,
                apellido: registro.apellido,
                email: registro.email,
                password: registro.password
                }
                try{
                const response = await axios.post(global+"registro", data);
                if(response.data.type == "error"){
                    swal("Datos invalidos",
                        response.data.message,
                        "error")
                }else{
                    swal(
                        "Registro exitoso",
                        "El registro sea acompletado exitosamente",
                        "success"
                    )
                    closeRegistro()
                }
                


                }catch(e){
                    console.log(e)
                }   

              
        } 
            

            
        }

        const login = async () =>{
            store.commit("setLoader", true)
            vL$.value.$touch()
            if(vL$.value.$invalid){
                store.commit("setLoader", false)
                swal("Error",
                "verifique los campos introducidos",
                "error")
            }else{
                try {
                    const response = await axios.post(global+"login", dataLogin)
                    if(response.data.type == "error"){
                        store.commit("setLoader", false)
                        swal("Error",
                            response.data.message,
                            "error")
                    }else{
                        store.commit("setLoader", false)
                        setToken(response.data.token)
                        let token = getToken();
                        await store.dispatch("getInfo", token)
                        router.push("/home")
                    }
                } catch (e) {
                    console.log(e)
                }
            }

        }

        return{
            showModal,
            registro,
            registroSend,
            vR$,
            closeRegistro,
            dataLogin,
            vL$,
            login
        }
    }
}




</script>
