'use strict'

import conn from "../db/database.js";
import historial from "./history.js";

const controllerHorario = {

    save: (req, res) =>{

        const info = req.body.info;
        const horario = req.body.horario;

        let sql = "INSERT INTO data_horarios(id_profesor, id_materia, cod_dia, turno_horario, semestre_horario) VALUES"
        horario.map((el, i) =>{
            if(horario.length == i + 1){
                sql = sql + ` ('${el.documento}', '${el.codigo}', '${el.horario}', '${info.turno}', '${info.semestre}')`
            }else{
                sql = sql + ` ('${el.documento}', '${el.codigo}', '${el.horario}', '${info.turno}', '${info.semestre}'),`
            }
        });
    
        conn.query(sql, (err) =>{
            if(err) throw err;

            historial(req.userInfo.id, `Añadio un nuevo horario del ${info.semestre} semestre de ${info.carrera} del ${info.turno}`)

            return res.status(200).send({
                message: "ok"
            })
        });
    },
};

export default controllerHorario;