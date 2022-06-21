<template>
<div class="modal__contenedor">
    <div class="contenedor__cerrar">
        <div class="cerrar__info">
            <h4>Aviso</h4>
            <p>En <span class="timepoFalta">{{tiempo}}</span> se cerrara la sesion de usuario</p>
        </div>
        <div class="botones__cerrar">
            <button class="btn btn-danger botonfinal" @click="exit">Salir</button>
            <button class="btn btn-success botonfinal" @click="exitInterval">Cancelar</button>
        </div>
    </div>
</div>
</template>

<script>
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
export default {
    name: "CloseSesion",
    setup(props, {emit}){
        const router = useRouter();
        const store = useStore();
        const tiempo = ref(11);

        
           const inter = setInterval(() =>{
                tiempo.value--
                if(tiempo.value == 0){
                    exit()
                    emit("cerrar");
                }
            }, 1000)

            
         const exit = () =>{
             emit("exit");
            localStorage.removeItem("token");
            store.commit("setSession", false);
            router.push("/");
            
        };

        const exitInterval = () =>{
            clearInterval(inter);
            emit("cerrar");
            };
        

        return{
            tiempo,
            exit,
            exitInterval
        }
    }
}
</script>