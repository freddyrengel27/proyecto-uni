'use strict'
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/routes.js";
import http from "http";
import {Server} from "socket.io";
import verificacionHorario from "./controllers/verificacionHorario.js";


const app = Express();

const server = http.createServer(app);



//Middlewares
app.use(Express.urlencoded({extended:false}));
app.use(Express.json());
app.use(morgan("dev"));
app.use(cors());


//Router
app.use("/system", router);

const io = new Server(server);

io.on("connection", (socket) =>{
    socket.on("verificacion",async (data) =>{
        const verificacion = await verificacionHorario(data); 
        
       socket.emit("resVerificacion", verificacion) 

    })
});


export default server;