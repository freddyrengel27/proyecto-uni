import {createWebHistory, createRouter} from "vue-router";

import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import Pensum from "../components/Pensum.vue";
import Profesores from "../components/Profesores.vue";
import Horarios from "../components/Horarios.vue";
import Historial from "../components/Historial.vue";
import Respaldo from "../components/Respaldo.vue";

import storage from "../storage/storage.js";


const routes = [
    {path: "/", name: "login", component: Login},
    {path: "/home", name: "home", component: Home},
    {path: "/pensum", name: "pensum", component: Pensum},
    {path: "/registro-profesores", name: "registro", component: Profesores},
    {path: "/horarios", name: "horarios", component: Horarios},
    {path: "/historial", name: "historial", component: Historial},
    {path: "/respaldo", name: "respaldo", component: Respaldo}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to,) =>{
    const state = storage.state.session
    if(!state && to.path != "/"){
        router.push("/");
    }

    if(state && to.path == "/"){
        router.push("/home")
    }

})

export default router;