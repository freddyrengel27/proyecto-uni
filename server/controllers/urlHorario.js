'use strict'
import fs from "fs/promises";
import moment from "moment";


import conn from "../db/database.js";
import historial from "./history.js";



const controllersUrlHorario = {

    save: async (req, res) =>{

        const {titulo, carrera, semestre} = req.body;
        
        let momento = moment().unix();

        let direccion = `./documentos/horario-${carrera}-${momento}.pdf`

        const lee = await fs.readFile(req.file.path);

        await fs.writeFile(direccion, lee, {encoding: "utf-8"});

        await fs.unlink(req.file.path);

        let sql = "INSERT INTO horarios(carrera, semestre, titulo, direccion) VALUES (?, ?, ?, ?)";

        conn.query(sql, [carrera, semestre, titulo, direccion], (err) =>{
            if(err) throw err;

            return res.status(200).send({
                message: "listo"
            })
        })
        
    },

    get: (req, res) =>{
        let query = "SELECT * FROM horarios";
        conn.query(query, (err, result) =>{
            if(err) throw err;

            return res.status(200).send({
                horarios: result
            })
        })
    },

    PDFdownload: (req, res) =>{

        const {url} = req.body;

        res.download(url);

    }

};

export default controllersUrlHorario;