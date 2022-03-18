import { createApp } from 'vue'

import "./assets/css/style.css"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import useVuelidate from "@vuelidate/core";
import router from "./router/Router.js"
import storage from './storage/storage.js';


import App from './App.vue'

createApp(App).use(useVuelidate).use(storage).use(router).mount('#app')
