'use strict'
import axios from "axios";
export const global = "http://localhost:3000/system/";
import {getToken} from "./tokens.js";

export const axiosInterceptors = () =>{
    axios.interceptors.request.use((config) =>{
        const token = getToken();

        if(token){
            config.headers.authorization = token;
        }

        return config;
    })
};

export const getCarerras = async () =>{
    let response = await axios.get(global+"getcarreras");
    return response.data.carreras;
};

export const getMaterias = async (id) =>{
    const param = {cod: id};
    let response = await axios.post(global+"getpensum", param)
    return response.data.pensum
};

export const getProfesores = async () =>{
    let response = await axios.get(global+"getprofesores")
    return response.data.profesores
};

    
    

