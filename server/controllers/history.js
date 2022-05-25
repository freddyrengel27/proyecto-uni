'use strict'

import conn from "../db/database.js";
import moment from "moment";

const historial = (id, accion) =>{

    const historial = {
        user: id,
        accion,
        fecha: moment().format("YYYY/MM/DD"),
        hora: moment().format("HH:mm:ss"),
    };

    console.log(historial);

    const sql = "INSERT INTO historial(id_user, accion, fecha, hora) VALUES(?, ?, ?, ?)";
    conn.query(sql, [historial.user, historial.accion, historial.fecha, historial.hora], (err, result) =>{
        if(err) throw err
    });

};

export default historial;