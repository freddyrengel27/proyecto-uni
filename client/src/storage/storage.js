import {createStore} from "vuex";
import axios from "axios";
import {global} from "../tools/request-axios.js"
const storage = createStore({
    state:{
        session: false,
        user: [],
        loader: false,

    },
    mutations:{
        setSession(state, value){
            state.session = value;
        },
        setUser(state, obj){
            state.user = obj
        },
        setLoader(state, value){
            state.loader = value
        }
    },
    actions:{
        async getInfo ({commit}, id){
            try{ 
            commit("setSession", "true")    
            const param = {token: id}
            const info = await axios.post(global+"info", param) 
            commit("setUser", info.data.info)
            } catch (error) {
                console.log(error)
            }
        },
    },
})

 if(localStorage.getItem("token")){
   const token = localStorage.getItem("token")
  storage.dispatch("getInfo", token)
}

export default storage;